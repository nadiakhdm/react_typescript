import React from "react";
import { BoardType } from "../Type/type.types";

function Board({ className, id, children }: BoardType) {
  const drop = (e: any) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card: HTMLElement | null = document.getElementById(card_id);
    e.target.appendChild(card);
    if (card instanceof HTMLElement) {
      return (card.style.display = "block");
    }
  };
  const dragOver = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className={className} id={id} onDragOver={dragOver} onDrop={drop}>
      {children}
    </div>
  );
}

export default Board;
