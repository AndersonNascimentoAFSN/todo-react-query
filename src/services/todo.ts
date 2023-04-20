import { Task } from "../@types/task";
import { api } from "./api";

type CreateTodoProps = {
  todo: Task
}

export async function createTodo({
  todo 
}: CreateTodoProps) {
    const todoCreated = await api<Task>('http://localhost:3333/todo', {
      method: "POST",
      body: JSON.stringify(todo),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })

    return todoCreated
}

export async function getTodoList() {
  const todos = await api<Task[]>('http://localhost:3333/todo')

  return todos
}