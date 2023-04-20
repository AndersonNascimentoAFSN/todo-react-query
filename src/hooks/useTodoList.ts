import { useQuery } from "react-query";
import { getTodoList } from "../services/todo";

export function useTodoList() {
  return useQuery('todoList', () => getTodoList()
  )
}