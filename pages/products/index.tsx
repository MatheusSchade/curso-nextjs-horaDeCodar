import Link from "next/link";

export default function Products() {
  return (
    <div>
      <Link legacyBehavior href={`/`}>
        <a>Voltar</a>
      </Link>
      <h1>Products</h1>
    </div>
  )
}