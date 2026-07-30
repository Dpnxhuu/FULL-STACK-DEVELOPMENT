"use client";
import TodoFilter from "@/components/TodoFilter/TodoFilter";
import TodoForm from "@/components/TodoForm/TodoForm";
import { setTodos } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  useEffect(() => {
    async function loadTodos() {
      setLoading(true);
      try {
        const res = await fetch("/api/todos");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error);
        }
        dispatch(setTodos(data));
      } catch (error) {
        if (error instanceof Error) {
          alert(error);
        }
      } finally {
        setLoading(false);
      }
    }
    loadTodos();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16 mt-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-700 py-12">
      <div className="mx-auto flex max-w-lg flex-col gap-4 px-4">
        <h1 className="text-2xl font-bold text-gray-100">Todo Prisma App</h1>
        <TodoForm />
        <TodoFilter />
      </div>
    </main>
  );
}
