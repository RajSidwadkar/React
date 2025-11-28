import React from "react";
import {useState} from "react";
function useCounter() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  };
  function handleSub() {
    setCount(count - 1);
  };
  function handleReset() {
    setCount(0);
  };
  return [count, handleAdd, handleSub, handleReset];
}
export default useCounter;