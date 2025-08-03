import { useContext } from "react";
import myFirstContext from "./context";
import D from "./D";
function C({ data }) {
  const mydata = useContext(myFirstContext);
  return (
    <div>
      <h1>C Component : {mydata}</h1>
      <br /> <hr />
      <br />
      {/* <D data={data} /> */}
      <D />
    </div>
  );
}

export default C;
