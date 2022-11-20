import Link from "next/link";
import { useRouter } from "next/router";

export default function Comment() {
  const router = useRouter();
  const todoId = router.query.todoId
  const commentId = router.query.commentId
  console.log('router', router)
  return (
    <>
      <Link legacyBehavior href={`/todos/${todoId}`}>
        <a>Voltar</a>
      </Link>
      <p>TodoId : {todoId}</p>
      <p>commentId : {commentId}</p>
    </>
  )
}