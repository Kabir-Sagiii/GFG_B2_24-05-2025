const myReducer = (store = { input: "------", carts: [] }, action) => {
  if (action.type === "my-action") {
    store = {
      ...store,
      input: action.payload,
    };
  } else if (action.type === "cart") {
    store = {
      ...store,
      carts: [],
    };
  }

  return store;
};
export default myReducer;

// const myReducer = (store, action) => {
//   var data = "Priya";
//   if (action.type === "my-action") {
//     //  var compdata = action.payload
//     //  data =compdata

//     data = action.payload;
//   }

//   return data;
// };
// export default myReducer;
