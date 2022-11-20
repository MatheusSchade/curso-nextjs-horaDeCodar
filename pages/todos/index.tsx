import { useRouter } from 'next/router'
import styles from '../../styles/Todos.module.css'
import { TodoPageProps } from '../../types'


export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await data.json()
  return { props: { todos } }
}

export default function Todos({ todos }: TodoPageProps) {
  const router = useRouter()
  return (
    <>
      <h1>Tarefas:</h1>
      <ul className={styles.todolist}>
        {todos?.map((item) => <li onClick={() => router.push(`/todos/${item?.id}`)} key={item?.id}>{item?.title}</li>)}
      </ul>
    </>
  )
}