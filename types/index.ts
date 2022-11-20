export type TodoPageProps = {
  todos: Array<EachTodo>
}

export interface EachTodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}