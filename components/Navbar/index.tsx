import Link from "next/link";
import styles from "../../styles/components/Navbar.module.css"

export default function Navbar() {
  return (
    <header>
      <ul className={styles.navbar}>
        <li>
          <Link legacyBehavior href={`/`}>
            <a>Home</a>
          </Link>
        </li>
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
        <li>
          <Link legacyBehavior href={`/todos`}>
            <a>ToDos</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href={`/contact`}>
            <a>Contato</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}