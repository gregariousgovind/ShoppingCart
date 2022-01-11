import React, { useEffect, Fragment } from 'react';
import { render } from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';

import Cart from './src/components/Cart/Cart';
import Layout from './src/components/Layout/Layout';
import Products from './src/components/Shop/Products';
import Notification from './src/components/UI/Notification';
import store from './src/store';
import { fetchCartData, sendCartData } from './src/store/cart-actions';
import './style.css';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    // const sendCartData = async () => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: 'pending',
    //     title: 'Sending...',
    //     message: 'Sending cart data!',
    //   })
    // );
    // const response = await fetch(
    //   'https://react-meals-c5ead-default-rtdb.firebaseio.com/cart.json',
    //   {
    //     method: 'PUT',
    //     body: JSON.stringify(cart),
    //   }
    // );
    // if (!response.ok) {
    //   throw new Error('Sending cart data failed.');
    // }
    // dispatch(
    //   uiActions.showNotification({
    //     status: 'success',
    //     title: 'Success...',
    //     message: 'Sent cart data successfully!',
    //   })
    // );
    // };
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) dispatch(sendCartData(cart));
    // sendCartData().catch((error) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: 'error',
    //       title: 'Error!',
    //       message: 'Sending cart data failed!',
    //     })
    //   );
    // });
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
