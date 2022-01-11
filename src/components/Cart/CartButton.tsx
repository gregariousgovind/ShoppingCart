import React from 'react';
import './CartButton.scss';

const CartButton = (props) => {
  return (
    <button className="cart-button">
      <span>My Cart</span>
      <span className="badge">1</span>
    </button>
  );
};

export default CartButton;
