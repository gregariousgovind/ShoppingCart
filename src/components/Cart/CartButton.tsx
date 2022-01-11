import React from 'react';
import { uiActions } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';
import './CartButton.scss';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className="cart-button" onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className="badge">1</span>
    </button>
  );
};

export default CartButton;
