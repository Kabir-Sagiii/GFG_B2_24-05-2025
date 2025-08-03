import { useState } from "react";

function Counter() {
  var [state, setState] = useState(0);
  console.log("re-rendering");
  function increaseCount() {
    setState(state + 1);
    console.log(state); //1
    setState(state + 3);
    console.log(state); //3
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count Value is : {state} </h2>
      <button onClick={increaseCount}>incCount</button>
    </div>
  );
}

export default Counter;
