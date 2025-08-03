import React from "react";
import { useCounter } from "./counterHook";
function CustomHook() {
  const [count, increment, decrement, reset] = useCounter(0);
  return (
    <div style={{ padding: "50px" }}>
      <h1>Count Value is :{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CustomHook;
