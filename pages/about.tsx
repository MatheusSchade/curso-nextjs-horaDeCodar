import Link from "next/link";

export default function About() {
  return (
    <div>
      <Link legacyBehavior href={`/`}>
        <a>Voltar</a>
      </Link>
      <h1>Página About</h1>
    </div>
  )
}