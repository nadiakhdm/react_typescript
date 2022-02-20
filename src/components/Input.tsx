import React, { useState } from "react";
import { useTodo } from "../Store/TodoList/Actions";

export type AddTodoType = {
  id: number;
  name: string | null;
};
export type InputProps = {
  value: string | null;
};

function Input() {
  const { dispatch, AddTodo } = useTodo();
  const [name, setName] = useState<string | null>(null);

  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="flex border-2 rounded">
          <input
            type="text"
            className="px-4 py-2 w-80"
            placeholder="add Project..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />

          <button
            onClick={async () => {
              if (name?.toString)
                await dispatch(AddTodo({ id: 55, name: name }));
              setName("");
            }}
            className="flex items-center justify-center px-4 border-l bg-green-400"
          >
            {" "}
            add
          </button>
        </div>
      </div>
    </>
  );
}

export default Input;
