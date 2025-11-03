import { useState } from "react";

export const useCounter = (initialvalue = 1) => {
  const [counter, setCounter] = useState(initialvalue);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    handleIncrement,
    handleDecrement,
  };
};
