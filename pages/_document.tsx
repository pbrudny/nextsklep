import { Html, Head, Main, NextScript } from 'next/document'

// generowany tylko raz - przy buildowaniu
export default function Document() {
  return (
    <Html lang="pl">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
