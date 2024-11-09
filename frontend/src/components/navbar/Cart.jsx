import React from "react";
import cartIcon from "../../assets/shopping-cart.png";
import "./CartIcon.css";

const CartIcon = ({ cart }) => {
  return (
    <div className="cart-container">
      <img src={cartIcon} alt="cart" className="cart-icon" />
      {cart.length > 0 && <div className="cart-count">{cart.length}</div>}
    </div>
  );
};

export default CartIcon;
