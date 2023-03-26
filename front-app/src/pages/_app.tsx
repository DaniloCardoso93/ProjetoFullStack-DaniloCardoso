import { ContactProvider } from '@/contexts/contact'
import { ClientProvider } from '@/contexts/user'
import { GlobalStyle } from '@/styles/globals'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ToastContainer/>
    <ContactProvider>
      <ClientProvider>
        <GlobalStyle/>
        <Component {...pageProps}/>
      </ClientProvider>
    </ContactProvider>
    </>
  )
}
