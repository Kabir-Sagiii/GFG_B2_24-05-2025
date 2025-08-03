import { useState } from "react";

function Data() {
  //   const [state, setState] = useState([10, 20, 30, 40]);
  const [state, setState] = useState([
    <p>para</p>,
    <h1>heading 1</h1>,
    <h4>heading 4</h4>,
  ]);
  return <div style={{ padding: "50px" }}>{state}</div>;
}

export default Data;
