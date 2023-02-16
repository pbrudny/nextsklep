import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// dynamiczny - tu się dzieje dużo
export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <Component {...pageProps} />
  </div>
}
