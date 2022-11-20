import styles from '../styles/Todos.module.css'

type TodoPageProps = { todos: Array<Todo> }

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await data.json()

  return { props: { todos } }
}

export default function Todos({ todos }: TodoPageProps) {

  return (
    <>
      <h1>Tarefas:</h1>
      <ul className={styles.todolist}>
        {todos?.map((item) => <li key={item?.id}>{item?.title}</li>)}
      </ul>
    </>
  )
}