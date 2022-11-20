import Link from 'next/link'
import router from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link legacyBehavior href={`/products`}>
            <a>Produtos</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href={`/about`}>
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
      <h1>Hello World</h1>
    </div>
  )
}
