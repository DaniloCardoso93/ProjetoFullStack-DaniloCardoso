import { HeaderRegister } from "@/components/Header"
import { PrimaryButton } from "@/styles/button"; 
import { Form } from "@/styles/form";
import { Input, Select } from "@/styles/input";
import { RegisterDiv } from "./style";

import { yupResolver } from "@hookform/resolvers/yup";

import { RegisterSchema } from "@/validate";
import { useForm } from "react-hook-form";

import { useClientContext } from "@/contexts/user";
import api from "@/services/api";
import { useRouter } from "next/router";


interface IDataRegister {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
  }

function RegisterForm(){

    const {registerRequest } = useClientContext()
    const router = useRouter()

    const{
        register,
        handleSubmit,
        formState:{ errors },
    } = useForm<IDataRegister>({
        resolver: yupResolver(RegisterSchema)
    })

    async function onSubmit(data:IDataRegister):Promise<void>{
        const res = await registerRequest({
            email:data.email,
            fullName:data.fullName,
            password:data.password,
            phoneNumber:data.phoneNumber,
        })      
        if (res){
            router.push("/")
        }
    }

    return(
        <RegisterDiv>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Crie sua conta</h1>
                <small>Rápido e grátis, vamos nessa</small>
                <label htmlFor="fullName">
                Nome
                <Input
                    id="fullName"
                    type="text"
                    placeholder="Digite aqui seu nome"
                    {...register("fullName")}
                />
                </label>
                <p>{errors.fullName?.message}</p>

                <label htmlFor="email">
                Email
                <Input
                    id="email"
                    type="email"
                    placeholder="Digite aqui seu Email"
                    {...register("email")}
                />
                </label>
                <p>{errors.email?.message}</p>

                <label htmlFor="password">
                Senha
                <Input
                    id="password"
                    type="password"
                    placeholder="Digite aqui sua senha"
                    {...register("password")}
                />
                </label>
                <p>{errors.password?.message}</p>

                <label htmlFor="confirmPassword">
                Confirmar senha
                <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirme sua senha"
                    {...register("confirmPassword")}
                />
                </label>
                <p>{errors.confirmPassword?.message}</p>

                <label htmlFor="phoneNumber">
                Telefone
                <Input
                    id="phoneNumber"
                    type="phoneNumber"
                    placeholder="Número de telefone com DDD ex: (21)123456789"
                    {...register("phoneNumber")}
                />
                </label>
                <p>{errors.phoneNumber?.message}</p>


                <PrimaryButton type="submit">Cadastrar</PrimaryButton>
            </Form>

        </RegisterDiv>
    )
}

export default RegisterForm