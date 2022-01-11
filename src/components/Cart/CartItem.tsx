import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import './CartItem.scss';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const removeItemhandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const additemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        title,
      })
    );
  };

  return (
    <li className="cart-item">
      <header>
        <h3>{title}</h3>
        <div className="price">
          ${total.toFixed(2)}{' '}
          <span className="itemprice">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="details">
        <div className="quantity">
          x <span>{quantity}</span>
        </div>
        <div className="actions">
          <button onClick={removeItemhandler}>-</button>
          <button onClick={additemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
