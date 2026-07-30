import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  items: Todo[];
}

const initialState: TodoState = {
  items: [],
};

const todoSlice = createSlice({
  name: "TodoApp",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>): void => {
      state.items.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>): void => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (
      state,
      action: PayloadAction<{ id: number; text: string }>,
    ): void => {
      const todo = state.items.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>): void => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    setTodos: (state, action: PayloadAction<Todo[]>): void => {
      state.items = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
