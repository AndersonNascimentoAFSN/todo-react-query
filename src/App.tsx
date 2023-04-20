import { useCallback, useState } from "react";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
import { TodoList } from "./components/TodoList";
import { useTodoList } from "./hooks/useTodoList";

export function App() {
  const { data: todo } = useTodoList();

  return (
    <>
      <Header status={todo?.length} />
      <Todo />

      <TodoList />
    </>
  )
}


