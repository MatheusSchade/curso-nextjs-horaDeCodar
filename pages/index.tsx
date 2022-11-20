import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="Roupas, Calçados, Bonés" />
        <meta name={`description`} content="Encontre a roupa que mais combina com você!" />
      </Head>
      <h1>Hello World</h1>
    </>
  )
}
