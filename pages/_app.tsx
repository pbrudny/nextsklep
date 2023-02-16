import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// dynamiczny - tu się dzieje dużo
export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <h1>Hej</h1>
    <Component {...pageProps} />
  </div>
}
