import React from "react";
import { useSelector } from "react-redux";
function Text() {
  const reduxStoreData = useSelector((storedata) => {
    return storedata.input;
  });
  return (
    <div style={{ padding: "50px" }}>
      <h1>Text Component</h1>
      <br />
      <h3 style={{ color: "green" }}>Data: {reduxStoreData}</h3>
    </div>
  );
}

export default Text;
