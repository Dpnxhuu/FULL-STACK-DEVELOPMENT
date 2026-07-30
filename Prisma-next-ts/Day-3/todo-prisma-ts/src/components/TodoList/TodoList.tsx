import TodoItem from "@/components/TodoItem/TodoItem";
import { Todo } from "@/redux/features/todoSlice";


export default function TodoList({todos}:{todos:Todo[]}) {
  
  return (
    <ul className="flex flex-col gap-2 rounded-xl bg-gray-50 p-3 shadow-inner ring-1 ring-gray-100">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed}/>
      ))}
    </ul>
  );
}
