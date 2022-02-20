import React, { useEffect, useState } from "react";
import { useRef } from "react";

export const Timer = () => {
  const intervalRef = useRef<number | null>(null);
  const [timer, setTimer] = useState(0);
  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      <button onClick={stopTimer}>{timer}</button>
    </div>
  );
};
