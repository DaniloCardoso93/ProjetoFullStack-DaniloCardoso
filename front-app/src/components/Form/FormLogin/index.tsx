import {useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useClientContext } from "@/contexts/user"
import { PrimaryButton } from "@/styles/button"
import { Form } from "@/styles/form"
import { LoginInput } from "@/styles/input"
import { useRouter } from "next/router"
import { DivFormLogin } from "./style"
import { LoginSchema } from "@/validate";
import Link from "next/link";
import api from "@/services/api";


interface IDataLogin{
    email:string;
    password:string
}

function LoginForm(){
    const { LoginRequest } = useClientContext()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IDataLogin>({
        resolver: yupResolver(LoginSchema),
      });

      const onSubmit = async (data:IDataLogin):Promise<void>=>{
        await LoginRequest(data)
      }

    return(
        <>
        <DivFormLogin>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <label htmlFor="email">Email
            <LoginInput
              id="email"
              type="email"
              placeholder="Digite seu Email"
              {...register("email")}
            />
            </label>
            <p>{errors.email?.message}</p>
  
            <label htmlFor="password">
              Password
              <LoginInput
                id="password"
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
            </label>
            <p>{errors.password?.message}</p>
            <PrimaryButton type="submit">Entrar</PrimaryButton>
  
            <small>Ainda não possui uma conta?</small>
  
            <Link href={"/register"}>Cadastre-se</Link>
          </Form>
        </DivFormLogin>
      </>
    )
}

export default LoginForm