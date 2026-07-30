import { deleteTodo, Todo, toggleTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import EditModal from "../EditModal/EditModal";
import { useState } from "react";

export default function TodoItem({ id, text, completed }: Todo) {
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState<boolean>(false);

  async function handleDelete(id: number) {
    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });
    dispatch(deleteTodo(id));
  }

  async function handleToggle(id: number, currentStatus: boolean) {
  await fetch(`/api/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !currentStatus }),
  });
  dispatch(toggleTodo(id));
}

  return (
    <>
      <li className="group flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3 shadow-sm transition hover:border-gray-200 hover:shadow-md h-auto">
        <input
          type="checkbox"
          id={String(id)}
          checked={completed}
          onChange={() => handleToggle(id, completed)}
          className="cursor-pointer flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 transition"
        />

        <label
          htmlFor={String(id)}
          className="flex-1 min-w-0 wrap-break-word cursor-pointer text-sm text-gray-800"
        >
          {text}
        </label>

        <div className="flex gap-1 opacity-0 transition group-hover:opacity-100 shrink-0">
          <button
            type="button"
            onClick={() => setEdit(true)}
            className="rounded-md p-1.5 text-gray-400 transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => handleDelete(id)}
            className="rounded-md p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </li>
      {edit && <EditModal setEdit={setEdit} id={id} text={text} />}
    </>
  );
}
