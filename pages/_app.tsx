import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from 'react-query'

const client = new QueryClient();

// dynamiczny - tu się dzieje dużo
export default function App({ Component, pageProps }: AppProps) {
  return <div>
    // react-query ma cache'a, który jest dostępny
    // dla wszystkich komponentów z drzewa
    // dzieki temu m.in wykonanie tego samego zapytania
    // wykonuje się tylko raz
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </div>
}
