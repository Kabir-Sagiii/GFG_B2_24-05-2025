import { useState } from "react";
import B from "./B";
import myFirstContext from "./context";

function A() {
  const [state, setState] = useState("i am A Component data");
  return (
    <div>
      <h1>A Component</h1>
      <button
        onClick={() => {
          setState(9999);
        }}
      >
        Modify
      </button>
      <br /> <hr />
      <br />
      <myFirstContext.Provider value={state}>
        <B />
      </myFirstContext.Provider>
      {/* <B data={state} /> */}
    </div>
  );
}

export default A;
