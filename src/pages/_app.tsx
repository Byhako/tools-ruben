import type { AppProps } from 'next/app'
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import Header from "app/components/Header"
import { Footer } from "app/components/Footer"
import { UserContextProvider } from "app/context/user"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tools Ruben",
  description: "Herramientas personales de trabajo diario",
}

const roboto = Roboto({ weight: ['400', '700'], subsets: ["latin"] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <main className={roboto.className}>
        <Header />
        <div className='globalContainer'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </UserContextProvider>
  )
}
