import Link from "next/link";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <Link legacyBehavior href={`/`}>
        <a>Voltar</a>
      </Link>
      <h1>Página About</h1>
    </div>
  )
}