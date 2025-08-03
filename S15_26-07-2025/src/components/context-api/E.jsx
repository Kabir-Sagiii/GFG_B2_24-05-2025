import { useContext } from "react";
import myFirstContext from "./context";
function E() {
  const data = useContext(myFirstContext);
  return (
    <div>
      <h1>E Component</h1>
      <p style={{ color: "blue", fontSize: "21px" }}>Data:{data}</p>
      <br /> <hr />
      <br />
    </div>
  );
}

export default E;
