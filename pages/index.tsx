import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="Roupas, Calçados, Bonés" />
        <meta name={`description`} content="Encontre a roupa que mais combina com você!" />
      </Head>
      <div>
        <h1 className={styles.title}>Hello World</h1>
        <Image src={`/images/city.jpg`} width={300} height={450} alt={"City"} />
      </div>
    </>
  )
}
