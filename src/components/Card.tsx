import React from "react";
import { CardType } from "../Type/type.types";

function Card({ id, className, draggable, children }: CardType) {
  const dragStart = (e: any) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    });
  };
  const dragOver = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div
      id={id}
      className={className}
      draggable={draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {children}
    </div>
  );
}

export default Card;
