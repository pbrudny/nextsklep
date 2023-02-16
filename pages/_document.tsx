import { Html, Head, Main, NextScript } from 'next/document'

// generowany tylko raz - przy buildowaniu
export default function Document() {
  return (
    <Html lang="pl">
      <Head />
      <body className={"bg-gray-100 antialiased"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
