import React from "react";
type HorizantalPosition = "left" | "top" | "center";
type VerticalPosition = "bottom" | "top" | "center";
export type ToalProps = {
  position:
    | Exclude<`${HorizantalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};
export const Toal = ({ position }: ToalProps) => {
  return <div>Toal-{position}</div>;
};
