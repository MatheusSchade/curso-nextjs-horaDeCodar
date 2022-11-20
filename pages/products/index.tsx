import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function Products() {
  return (
    <div>
      <Navbar />
      <Link legacyBehavior href={`/`}>
        <a>Voltar</a>
      </Link>
      <h1>Products</h1>
    </div>
  )
}