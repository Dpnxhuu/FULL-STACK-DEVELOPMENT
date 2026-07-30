import { editTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Dispatch, SetStateAction, useState } from "react";

interface EditPropsType {
  setEdit: Dispatch<SetStateAction<boolean>>;
  id: number;
  text: string;
}

export default function EditModal({id, setEdit, text}:EditPropsType) {

  const  [ValueIs, setValueIs] = useState<string>(text);
  const Dispatch = useAppDispatch()

  const handleEditState = async (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!ValueIs) return;

  await fetch(`/api/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: ValueIs }),
  });

  Dispatch(editTodo({ id, text: ValueIs }));
  setEdit(false);
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Edit Todo</h2>

        <form onSubmit={handleEditState}>
          <input
            type="text"
            value={ValueIs}
            required
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setValueIs(e.target.value)}
            className="mb-5 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setEdit(false)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
