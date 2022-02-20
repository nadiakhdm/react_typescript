import React from "react";

export type valueType = {
  value: number;
};

export type isPsetiveProps = valueType & {
  isPsetive: boolean;
  isNegative?: never;
  isZero?: never;
};
export type isZeroProps = valueType & {
  isPsetive?: never;
  isNegative?: never;
  isZero: boolean;
};
export type isNegativeProps = valueType & {
  isPsetive?: never;
  isNegative: boolean;
  isZero?: never;
};
export type RandomProps = isNegativeProps | isPsetiveProps | isZeroProps;
export const Random = ({
  value,
  isNegative,
  isPsetive,
  isZero,
}: RandomProps) => {
  return (
    <div>
      {value}
      {isPsetive && "posetive"}
      {isNegative && "negative"}
      {isZero && "zero"}
    </div>
  );
};
