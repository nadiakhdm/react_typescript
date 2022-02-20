import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Board, Card, CreateTask } from ".";
import { useTodo } from "../Store/TodoList/Actions";

export type tododetailType = {
  id: number;
  title: string;
};
export type paramsType = {
  id: string;
};
function Issue() {
  const { id } = useParams<paramsType>();
  const { todos, dispatch, DetailData } = useTodo();
  const [showModal, setShowModal] = React.useState<boolean>(false);
  useEffect(() => {
    dispatch(DetailData());
  }, []);

  return (
    <div className="flex  w-full h-full  p-4 text-center overflow-hidden mx-auto">
      <Board
        id="iss_2"
        className="board flex flex-col w-1/2 p-4 text-center text-white rounded-md  mx-2 bg-emerald-800"
      >
        <h1 className="font-bold text-2xl">Create Task</h1>
        <button
          className="bg-red-400 w-1/6 rounded-lg  m-4 p-2 "
          onClick={(e) => setShowModal(true)}
        >
          +
        </button>
        <CreateTask
          updatecomponent={dispatch(DetailData())}
          id={id}
          show={showModal}
          close={() => {
            setShowModal(!showModal);
          }}
        />
      </Board>
      <Board
        id="iss_1"
        className="board flex flex-col w-1/2 p-4 text-center text-white rounded-md mx-2 bg-emerald-800"
      >
        <h1 className="font-bold text-2xl">Open</h1>

        {todos.detail &&
          todos.detail.map((itm: tododetailType) => (
            <Card
              key={itm.id}
              id={itm.id}
              className="card bg-white text-black  p-4 rounded-lg m-2"
              draggable="true"
            >
              <p className="text-red">{itm.title}</p>
            </Card>
          ))}
      </Board>
      <Board
        id="iss_2"
        className="board flex flex-col w-1/2 p-4 text-center text-white rounded-md  mx-2 bg-emerald-800"
      >
        <h1 className="font-bold text-2xl">Close</h1>
      </Board>
    </div>
  );
}

export default Issue;
