import axios from "axios";
import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
    SetStateAction,
  } from "react";
import api  from "../services/api"
import { ErrorToast, SucessToast } from "../toast";
import { useContactContext } from "./contact";
import { setCookie, parseCookies, destroyCookie } from "nookies"
import { useRouter } from "next/router";

interface IUserProviderProps {
    children: ReactNode;
  }

  interface IContacts{
    id:string;
    fullName:string;
    email:string;
    phoneNumber:string;
  }

interface IUser{
    id:string;
    fullName:string;
    email:string;
    password?:string
    phoneNumber:string;
    isActive:boolean;
    createAt:string;
    updateAt:string;
    contacts:[IContacts];
}


interface ILoginUser {
  email: string;
  password: string;
}

interface ILoginRes{
  token:string;
  userId:string
}

interface IRegisterUser {
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
}

interface IRegisterUserResponse {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    isActive: boolean;
    created_at: string;
    updated_at: string;
}


interface IUserContext{
    user: IUser | null;
    setUser: React.Dispatch<SetStateAction<IUser | null>>;
    loading: boolean;
    setLoading: React.Dispatch<SetStateAction<boolean>>;
    isModalVisible: boolean;
    setIsModalVisible: React.Dispatch<SetStateAction<boolean>>;
    openModal(): void;
    closeModal(): void;
    LoginRequest(data: ILoginUser): Promise<ILoginRes>;
    registerRequest(data: IRegisterUser): Promise<IRegisterUserResponse>;
    deleteUserRequest(token:string, id:string):Promise<void>,
    PerfilRequest(token:string, id:string): Promise<void>;
}


export const clientContext = createContext<IUserContext>({} as IUserContext)

export function ClientProvider({ children }: IUserProviderProps){

    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);

    const { contact, setContact } = useContactContext();

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const router = useRouter()

    function openModal(): void {
      setIsModalVisible(true);
    }
  
    function closeModal(): void {
      setIsModalVisible(false);
    }

    async function LoginRequest(data: ILoginUser){
      destroyCookie(null, 'token')
      destroyCookie(null, 'userId')
      try {
        const res = await api.post("/login", data);
        setCookie(null, "token", res.data.token, {maxAge: 85400 * 7, path:"/"})
        setCookie(null, "userId", res.data.userId, {maxAge: 85400 * 7, path:"/"})
        SucessToast("Login realizado com sucesso");
        router.push('/dashboard')
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const erro = error.response?.data.message;
          ErrorToast(erro);
          return erro;
        }
      }
    };

      const registerRequest = async (data: IRegisterUser) => {
        try {
          const res = await api.post("/users", data);
          SucessToast("Cadastro realizado com sucesso");
          return res.data;
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const erro = error.message;
            ErrorToast(erro);
            return erro;
          }
        }
      };

      const deleteUserRequest = async (token:string, userId:string) => {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          await api.delete(`/users/${userId}`);
          SucessToast("Usuário deletado com sucesso");
          destroyCookie(null, 'token')
          destroyCookie(null, 'userId')
          router.push("/")
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const erro = error.message;
            ErrorToast(erro);
          }
        }
      };

      async function PerfilRequest(token:string, userId:string){
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const client = await api.get(`/users/${userId}`)
          setUser(client.data)
        } catch (error:unknown | any) {
          console.error(error.response.data.message)
        }
      };

      useEffect(() => {
        async function Perfil() {
          const token = localStorage.getItem("@token");
    
          if (token) {
            try {
              api.defaults.headers.common.authorization = `Bearer ${token}`;
              const { data } = await api.get("/users");
              setUser(data);
            } catch (error) {
              console.error(error);
              window.localStorage.clear();
            }
          }
          setContact(false);
          setLoading(false);
        }
    
        Perfil();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [contact]);
    
      return (
        <clientContext.Provider
          value={{
            user,
            setUser,
            loading,
            setLoading,
            isModalVisible,
            setIsModalVisible,
            openModal,
            closeModal,
            LoginRequest,
            registerRequest,
            deleteUserRequest,
            PerfilRequest,
          }}
        >
          {children}
        </clientContext.Provider>
      );
      
}

export function useClientContext(): IUserContext {
    const context = useContext(clientContext);
  
    return context;
  }