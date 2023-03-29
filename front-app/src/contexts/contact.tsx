import axios from "axios";
import { parseCookies } from "nookies";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  SetStateAction,
} from "react";
import api from "../services/api";
import { ErrorToast, SucessToast } from "../toast";

interface IContactProviderProps {
    children: ReactNode;
  }
  
  interface IContactRegister {
    fullName: string;
    email: string;
    phoneNumber:string
  }

  
  interface IContactUpdate {
    fullName?: string;
    email?: string;
    phoneNumber?:string
  }
  
  interface IContactRegisterResponse {
    id: string;
    fullName: string;
    email: string;
    phoneNumber:string
    created_at: string;
    updated_at: string;
    user: {
      id: string;
      fullName:string;
    };
  }
  
  interface IContactContext {
    contact: boolean;
    setContact: React.Dispatch<SetStateAction<boolean>>;
    contactRegister(data: IContactRegister): Promise<IContactRegisterResponse>;
    contactDelete(id: string, token:string): Promise<void>;
    contactUpdate(data:IContactUpdate, id:string): Promise<IContactUpdate>;
    isDeleteModalVisible:boolean;
    setIsDeleteModalVisible: React.Dispatch<SetStateAction<boolean>>;
    openDeleteModal():void;
    closeDeleteModal():void
    isUpdateModalVisible:boolean;
    setIsUpdateModalVisible: React.Dispatch<SetStateAction<boolean>>;
    openUpdateModal():void;
    closeUpdateModal():void
  }
  
  export const contactContext = createContext<IContactContext>({} as IContactContext);
  
  export function ContactProvider({ children }: IContactProviderProps) {
    const [contact, setContact] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState<boolean>(false);
    const [isUpdateModalVisible, setIsUpdateModalVisible] = useState<boolean>(false);

    const {token} = parseCookies()

    function openDeleteModal(): void {
      setIsDeleteModalVisible(true);
    }
  
    function closeDeleteModal(): void {
      setIsDeleteModalVisible(false);
    }

    function openUpdateModal(): void {
      setIsUpdateModalVisible(true);
    }
  
    function closeUpdateModal(): void {
      setIsUpdateModalVisible(false);
    }


  
    async function contactRegister(data: IContactRegister) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const res = await api.post("/contact", data);
        SucessToast("Contato cadastrado com sucesso");
        setContact(true);
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const erro = error.response?.data.message;
          ErrorToast(erro);
          return erro;
        }
      }
    }

    async function contactUpdate(data: IContactUpdate, contactId:string) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const res = await api.patch(`/contact/${contactId}`, data);
        SucessToast("Contato atualizado com sucesso");
        setContact(true);
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const erro = error.response?.data.message;
          ErrorToast(erro);
          return erro;
        }
      }
    }
  
    async function contactDelete(id: string, token:string) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        await api.delete(`/contact/${id}`);
        SucessToast("Contato excluido com sucesso");
        setContact(true);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const erro = error.response?.data.message;
          ErrorToast(erro);
        }
      }
    }
  
    return (
      <contactContext.Provider value={{
        contact,
        setContact,
        contactRegister,
        contactDelete,
        isDeleteModalVisible,
        setIsDeleteModalVisible,
        openDeleteModal,
        closeDeleteModal,
        isUpdateModalVisible,
        setIsUpdateModalVisible,
        openUpdateModal,
        closeUpdateModal,
        contactUpdate,
        }}>
        {children}
      </contactContext.Provider>
    );
  }
  
  export function useContactContext(): IContactContext {
    const context = useContext(contactContext);
  
    return context;
  }