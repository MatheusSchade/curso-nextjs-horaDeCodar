import Link from "next/link";

export default function About() {
  return (
    <div>
      <Link legacyBehavior href={`/`}>
        <a>Voltar</a>
      </Link>
      <p>Página About</p>
    </div>
  )
}