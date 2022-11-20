import Link from "next/link";
import { useRouter } from "next/router";

export default function Todo() {
  const router = useRouter()
  const todoId = router.query.todoId

  return (
    <>
      <Link legacyBehavior href="/todos">
        <a>Voltar</a>
      </Link>
      <p>{todoId}</p>
      <p>Comentários:</p>
      <Link href={`/todos/${todoId}/comments/1`}>
        1  <a>Detalhes</a>
      </Link>
      <Link href={`/todos/${todoId}/comments/2`}>
        2 <a>Detalhes</a>
      </Link>
      <Link href={`/todos/${todoId}/comments/3`}>
        3 <a>Detalhes</a>
      </Link>
    </>
  )
}