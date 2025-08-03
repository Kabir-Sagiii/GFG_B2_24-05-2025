const productsActionCreator = (products) => {
  return {
    type: "add-to-cart",
    payload: products,
  };
};

export default productsActionCreator;
