import productsActionCreator from "../../../redux/action-creators/productsActionCreator";

export const addToCart = (products, dispatch) => {
  dispatch(productsActionCreator(products));
};
