import { useQuery } from "react-query";
import { getTodoList } from "../services/todo";

export function useTodoList() {
  const oneMinute = 1000 * 60

  return useQuery(['todoList'], () => getTodoList(),
    {
      staleTime: oneMinute * 30,
    }
  )
}