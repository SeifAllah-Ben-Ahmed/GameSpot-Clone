import React from "react";

const CartItem = () => {
  return (
    <div className="product">
      <div className="image" />
      <div className="details">
        <h5 className="pd-name">Sony DualSense Wireless</h5>
        <span className="quantity">
          <small>Quantity : 1</small>
        </span>
      </div>
      <span className="price">
        <strong>$500.00</strong>
      </span>
    </div>
  );
};

export default CartItem;
