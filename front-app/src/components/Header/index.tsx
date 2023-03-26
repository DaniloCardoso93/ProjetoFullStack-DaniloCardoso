import { useClientContext } from "@/contexts/user";
import Link from "next/link";
import { destroyCookie } from 'nookies';
import { HeaderBox, UlStyle, NavStyle } from "./style";
import { useRouter } from "next/router";

interface ILogin{
    email:string;
    password:string
}

export function Header(){
    const router = useRouter()

    function register():void{
        router.push("/register")
    }

    return(
        <HeaderBox>
                <NavStyle>
                    <Link href={"/"}>Project FullStack</Link>
                    <UlStyle>
                        <li onClick={register}>Register</li>
                    </UlStyle>
                </NavStyle>
        </HeaderBox>
    )
}

export function HeaderRegister(){
    const router = useRouter()

    async function register(){
      router.push("/")
    }

    return(
        <HeaderBox>
                <NavStyle>
                    <Link href={"/"}>Project FullStack</Link>
                    <UlStyle>
                        <li onClick={register}>Login</li>
                    </UlStyle>
                </NavStyle>
        </HeaderBox>
    )
}

export function HeaderLogged(){

    const router = useRouter()

    function logout():void{
        destroyCookie(null, 'token')
        destroyCookie(null, 'userId')
        router.push("/")
    }
    

    return(
        <HeaderBox>
            <NavStyle>
                <Link href={"/dashboard"}>Project FullStack</Link>
                <UlStyle>
                    <li onClick={()=>{router.push("/dashboard/profile")}}>Profile</li>
                    <li onClick={logout}>Logout</li>
                </UlStyle>
            </NavStyle>
        </HeaderBox>
    )
}
