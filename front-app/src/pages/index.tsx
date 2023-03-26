import LoginForm from '@/components/Form/FormLogin'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import {Header} from "../components/Header"
import { parseCookies } from 'nookies'
import { useEffect } from "react"
import api from '@/services/api'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {token, userId} = parseCookies()
  const router = useRouter()

  useEffect(() => {
    async function profile() {    
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          await api.get(`/users/${userId}`)  
          router.push("/dashboard")
      } catch (error:any) {
        console.error(error.response.data.message)
      }
    }
  }
  profile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
<>
    <Head>
      <title>
        Project FullStack
      </title>
      <meta charSet='UTF-8' />
      <meta httpEquiv="X-UA-Compatible" content="IE-Edge" />
      <meta name="description" content="Desafio de uma aplicação web full stack." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="https://kenzie.com.br/favicon.jpeg" type="image/x-icon" />
    </Head>

    <Header />
    <LoginForm/>
    </>
  )
}
