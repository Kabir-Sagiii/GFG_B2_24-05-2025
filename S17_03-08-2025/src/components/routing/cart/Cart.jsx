import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
function Cart() {
  const cartsData = useSelector((store) => {
    return store.carts;
  });
  const dispatch = useDispatch();

  const removeCart = (id) => {
    dispatch({
      type: "remove-from-cart",
      payload: id,
    });
  };

  return (
    <div>
      {cartsData.length > 0 ? (
        <div className="cartContainer">
          <section className="cart-section">
            <section className="cart-row">
              <div>Image</div>
              <div>Title</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Action</div>
            </section>
            {cartsData.map(({ image, title, price, id }) => {
              return (
                <section
                  style={{ marginBottom: "30px" }}
                  className="cart-row-data"
                >
                  <div>
                    <img src={image} alt="" width={60} height={60} />
                  </div>
                  <div>{title}</div>
                  <div>$ {price}</div>
                  <div>
                    <button>-</button>
                    {1}
                    <button>+</button>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        removeCart(id);
                      }}
                    >
                      delete
                    </button>
                  </div>
                </section>
              );
            })}
          </section>
          <section className="order-summary">Order Summary</section>
        </div>
      ) : (
        <div>
          <h1 style={{ color: "red", marginTop: "100px", textAlign: "center" }}>
            No Products added in Cart
          </h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
