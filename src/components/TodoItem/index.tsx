import { Task } from "../../@types/task";

type TodoItemProps = {
  item: Task
  // handleDeleteTodo: (id: string) => void
}

export function TodoItem({ item, /* handleDeleteTodo */ }: TodoItemProps) {

  return (
    <>
      <tr>
        <td className="text-center">{item.id}</td>
        <td className="text-center">{item.description}</td>
        <td className="text-center">
          <button
            // onClick={() => handleDeleteTodo(item.id)}
            className="p-2 bg-purple-700 rounded-lg text-white hover:opacity-75">
            Delete
          </button>
        </td>
      </tr>
    </>
  )
}
