import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// dynamiczny - tu się dzieje dużo
export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <h1 className={"text-5xl text-center text-red-500 rounded-3xl border-5"}>Hej</h1>
    <Component {...pageProps} />
  </div>
}
