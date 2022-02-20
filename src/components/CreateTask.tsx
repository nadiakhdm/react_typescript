import React, { useState } from "react";
import { useTodo } from "../Store/TodoList/Actions";
import { TaskType } from "../Type/type.types";

export type inputType = {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
};
export type dataType = {
  id: any;
  taske: any;
};

function CreateTask({ updatecomponent, id, show, close }: TaskType) {
  const { dispatch, AddIssue } = useTodo();
  const [task, setTask] = useState<string | null>(null);

  if (!show) {
    return null;
  }
  const handleClose = () => {
    close();
  };
  const handleCreate = () => {
    let data: dataType = { id: id, taske: task };
    dispatch(AddIssue(data));

    close();
    updatecomponent();
    setTask("");
  };
  return (
    <>
      <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
        <div className="bg-white px-16 py-14 rounded-md text-center">
          <label htmlFor="create" className="relative block" />
          <input
            id="create"
            className="placeholder:italic placeholder:text-slate-800  text-slate-800  block my-2 bg-white w-full border border-slate-300 rounded-md py-2 p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Add Task..."
            type="text"
            name="search"
            onChange={(e) => {
              setTask(e.target.value);
            }}
         
          />
  
          <button
            onClick={handleClose}
            className="bg-indigo-500 px-4 py-2 rounded-md text-md text-white"
          >
            Close
          </button>
          <button
            onClick={handleCreate}
            className="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateTask;
