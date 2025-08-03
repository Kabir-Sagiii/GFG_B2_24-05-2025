import toast from "react-hot-toast";
const myReducer = (store = { input: "------", carts: [] }, action) => {
  if (action.type === "my-action") {
    store = {
      ...store,
      input: action.payload,
    };
  } else if (action.type === "add-to-cart") {
    store = {
      ...store,
      carts: [...store.carts, action.payload],
    };
    toast("Added to cart successfully", {
      duration: 1500,
      style: {
        backgroundColor: "green",
        color: "white",
      },
    });
    // alert("Added to cart successfully");
  } else if (action.type === "remove-from-cart") {
    store = {
      ...store,
      carts: store.carts.filter((item) => item.id !== action.payload),
    };
    toast("Removed from cart successfully", {
      duration: 1500,
      style: {
        backgroundColor: "red",
        color: "white",
      },
    });
  }

  return store;
};
export default myReducer;
