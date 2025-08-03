import { useState } from "react";

function ListData() {
  const [state, setState] = useState(["html", "css", "js", "react", "node"]);
  return (
    <div style={{ padding: "50px" }}>
      <h2>List of Data</h2>
      <ol>
        {state.map((element, index) => {
          return <li>{element}</li>;
        })}
      </ol>
    </div>
  );
}

export default ListData;
