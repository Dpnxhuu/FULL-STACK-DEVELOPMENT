"use client"
import { addTodo, editTodo } from "@/redux/features/todoSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRef, useState } from "react";

export default function TodoForm() {
  
  const [task, setTask] = useState<string>("");
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.items)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAddTask = async (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!task) return;

  const res = await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: task }),
  });
  const newTodo = await res.json();

  dispatch(addTodo(newTodo));
  setTask("");
};

  return (
    <>
    <form onSubmit={handleAddTask} className="rounded-xl bg-white p-4 shadow-md ring-1 ring-gray-100">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={task}
          ref={inputRef}
          maxLength={100}
          required
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
          className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
        />
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
        >
          Add
        </button>
      </div>
    </form>
    {todos.length === 0 && <EmptyState inputRef={inputRef}/>}
    </>
  );
}


export function EmptyState({ inputRef }: { inputRef: React.RefObject<HTMLInputElement | null> }) {

  const handleInputFocus = () => {
    inputRef?.current?.focus();
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-gray-200 bg-white py-16 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
        <svg
          className="h-6 w-6 text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      </div>
      <p className="text-sm text-gray-500">
        No todos yet. Add one to get started!
      </p>
      <button
        type="button"
        onClick={handleInputFocus}
        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
      >
        Add your first todo
      </button>
    </div>
  );
}
