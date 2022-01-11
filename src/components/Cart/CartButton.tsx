import React from 'react';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';
import './CartButton.scss';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className="cart-button" onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className="badge">{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
