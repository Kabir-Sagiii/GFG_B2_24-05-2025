import React from "react";
import C from "./C";
function B({ data }) {
  return (
    <div>
      <h1>B Component</h1>
      {/* <p style={{ color: "red" }}> {data} </p> */}
      <p style={{ color: "red" }}> </p>
      <br /> <hr />
      <br />
      {/* <C data={""} /> */}
      <C />
    </div>
  );
}

export default B;
