import { HeaderLogged } from "@/components/Header"

import { useContactContext } from "@/contexts/contact"
import { useClientContext } from "@/contexts/user"
import api from "@/services/api"
import { GetServerSideProps } from "next"
import nookies from "nookies"
import { useEffect } from "react"

import { Div, PerfilDiv, BodyDashbord } from "@/pages/dashboard/style"
import { DeleteButton, PrimaryButton } from "@/styles/button"
import { Form } from "@/styles/form"
import { LoginInput } from "@/styles/input"
import { RegisterSchema } from "@/validate"
import { yupResolver } from "@hookform/resolvers/yup"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { DivFormLogin } from "@/components/Form/FormLogin/style"
import { useRouter } from "next/router"
import { DeleteClientModal } from "@/components/Modal"


interface IDataupdate{
    fullName:string;
    email:string;
    password:string;
    phoneNumber:string
}

interface IId{
    id:string;
    token:string
}

function Profile({id, token}:IId){
    const { user, PerfilRequest, setLoading, openModal, isModalVisible } = useClientContext()
    const { setContact } = useContactContext()
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IDataupdate>({
        resolver: yupResolver(RegisterSchema),
      });

      const onSubmit = async (data:IDataupdate):Promise<void>=>{
        try {
            api.defaults.headers.common.authorization = `Bearer ${token}}`
            const res = await api.patch(`/users/${id}`, data)
            console.log(res)
            router.push("/dashboard")           
        } catch (error:any) {
            console.log(error.response.data.message)
        }
      }

    useEffect(() => {
        async function profile() {    
          if (token) {
            await PerfilRequest(token, id)
          }
          setContact(false);
          setLoading(false);
        }
    
        profile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return(
        <>    
            <HeaderLogged></HeaderLogged>
            <Div>
                {isModalVisible ? <DeleteClientModal />:null}
                <BodyDashbord>
                    <DivFormLogin>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Perfil do {user?.fullName}</h1>
                        <label htmlFor="fullName">Nome completo
                        <LoginInput
                        id="fullName"
                        type="fullName"
                        placeholder="Digite seu nome completo"
                        defaultValue={user?.fullName}
                        {...register("fullName")}
                        />
                        </label>
                        <p>{errors.fullName?.message}</p>
            
                        <label htmlFor="email">
                        Email
                        <LoginInput
                            id="email"
                            type="email"
                            placeholder="Digite seu email"
                            defaultValue={user?.email}
                            {...register("email")}
                        />
                        </label>
                        <p>{errors.email?.message}</p>

                        <label htmlFor="password">
                        Password
                        <LoginInput
                            id="password"
                            type="password"
                            placeholder="Digite seu Password"
                            {...register("password")}
                        />
                        </label>
                        <p>{errors.password?.message}</p>

                        <label htmlFor="phoneNumber">
                        Número de telefone
                        <LoginInput
                            id="phoneNumber"
                            type="phoneNumber"
                            defaultValue={user?.phoneNumber}
                            placeholder="Digite seu numero de telefone ex:(21)123456789"
                            {...register("phoneNumber")}
                        />
                        </label>
                        <p>{errors.phoneNumber?.message}</p>


                        <PrimaryButton type="submit">Atualizar Perfil</PrimaryButton>
                        <DeleteButton onClick={openModal} type={"button"}>Apagar Perfil</DeleteButton>
                    </Form>
                    </DivFormLogin>
                </BodyDashbord>
    </Div>
        </>
    )
}



export const getServerSideProps:GetServerSideProps = async(ctx)=>{
    const cookies = nookies.get(ctx)

    if(cookies.token){
        try {
            api.defaults.headers.authorization = `Bearer ${cookies.token}`;
            const { data } = await api.get(`/users/${cookies.userId}`)

        } catch (error) {
            return {
                redirect:{
                    destination:"/",
                    permanent:false
                }
            }
        }
    }
    
    if(!cookies['token']){
        return {
            redirect:{
                destination:"/",
                permanent:false
            }
        }
    }
    
    return {
        props:{
            id:cookies['userId'],
            token:cookies['token']
        }
    }
}

export default Profile