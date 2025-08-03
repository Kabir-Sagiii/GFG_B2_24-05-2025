import React from "react";
import E from "./E";
function D({ data }) {
  return (
    <div>
      <h1>D Component</h1>
      <p style={{ color: "green" }}> {data}</p>
      <br /> <hr />
      <br />
      <E />
    </div>
  );
}

export default D;
