import Link from "next/link";

export default function Navbar() {
  return (
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
  )
}