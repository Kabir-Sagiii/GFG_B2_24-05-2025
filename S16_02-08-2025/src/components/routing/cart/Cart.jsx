import React from "react";
import "./Cart.css";
function Cart() {
  return (
    <div className="cartContainer">
      <section className="cart-section">
        <div>Image</div>
        <div>Title</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Action</div>
      </section>
      <section className="order-summary">Order Summary</section>
    </div>
  );
}

export default Cart;
