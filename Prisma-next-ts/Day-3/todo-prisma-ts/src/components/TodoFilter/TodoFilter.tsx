"use client"
// import { useSelector } from "react-redux";
import { useState } from "react";
import TodoList from "../TodoList/TodoList";
import { useAppSelector } from "@/redux/hooks";

export default function TodoFilter() {

  const [filter, setFilter] = useState<string>("All");
  const todos = useAppSelector((state) => state.todos.items)

  const filteredTask = todos.filter((todo) => {
    if(filter === "Active"){
      return !todo.completed;
    }else if(filter === "Completed"){
      return todo.completed;
    }else{
      return true;
    }
  });

  return (
    todos.length > 0 && <>
      <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-md ring-1 ring-gray-100">
        <p className="text-xs font-medium text-gray-500"><span className="px-1 text-[] font-bold text-black">{filteredTask.length}</span>{filter === "Active"? "Active Task" : filter === "Completed" ? "Completed Task" : "Total Task"}</p>

        <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => setFilter("All")}
            className={`${filter === "All"? "text-indigo-600 shadow-sm bg-white" : "text-gray-500"} rounded-md  px-3 py-1.5 text-xs font-medium `}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setFilter("Active")}
            className={`${filter === "Active"? "text-indigo-600 shadow-sm bg-white" : "text-gray-500"} rounded-md px-3 py-1.5 text-xs font-medium`}
          >
            Active
          </button>
          <button
            type="button"
            onClick={() => setFilter("Completed")}
            className={`${filter === "Completed"? "text-indigo-600 shadow-sm bg-white" : "text-gray-500"} rounded-md px-3 py-1.5 text-xs font-medium`}
          >
            Completed
          </button>
        </div>
      </div>
      {filteredTask.length > 0 && <TodoList todos={filteredTask}/>}
    </>
  );
}
