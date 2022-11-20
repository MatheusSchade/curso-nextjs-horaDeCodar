import Link from "next/link";
import { EachTodo } from '../../../types';

export const getStaticProps = async (context: { params: { todoId: string } }) => {
  // gera as props (dados) para colocar os dados na página na geração estática feita pelo next js
  const { params } = context;
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)
  const todo = await data.json()
  return { props: { todo } }
}


export const getStaticPaths = async () => {
  // pega todas as opções disponíveis (encontrar uma forma de ver todos os disponíveis)
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await response.json()

  const paths = data?.map((todo: EachTodo) => {
    return {
      params: {
        todoId: `${todo.id}`
      }
    }
  })

  return { paths, fallback: true }

  // fazer request para pegar a lista com todos os pedidos (id) para aquele usuário
  // com todas as opções já disponíveis, é só mapear
}


export default function Todo({ todo }: { todo: EachTodo }) {

  return (
    <>
      <Link legacyBehavior href="/todos">
        <a>Voltar</a>
      </Link>
      <p>{todo?.id}</p>
      <p>{todo?.title}</p>
    </>
  )
}