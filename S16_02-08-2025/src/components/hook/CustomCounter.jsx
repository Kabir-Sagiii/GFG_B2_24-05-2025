import React from "react";
import { useCounter } from "./CounterHook";
function CustomCounter() {
  const [count, increment, decrement, reset] = useCounter(100);
  return (
    <div>
      <h1>Count Value is :{count}</h1>
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dec</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CustomCounter;
