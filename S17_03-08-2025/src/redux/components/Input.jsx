import { useRef } from "react";
import myActonCreator from "../action-creators/myActionCreator";
import myStore from "../store/store";
import { useDispatch } from "react-redux";
function Input() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const getData = () => {
    // myStore.dispatch(myActonCreator(inputRef.current.value));

    const data = inputRef.current.value;
    const actionObj = myActonCreator(data);
    // myStore.dispatch(actionObj);
    dispatch(actionObj);
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Input Component</h1>
      <br />
      <input ref={inputRef} type="text" placeholder="enter any data" />
      <button onClick={getData}>Submit</button>
    </div>
  );
}

export default Input;
