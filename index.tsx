import React from 'react';
import { render } from 'react-dom';
import { Provider, useSelector } from 'react-redux';

import Cart from './src/components/Cart/Cart';
import Layout from './src/components/Layout/Layout';
import Products from './src/components/Shop/Products';
import store from './src/store';

import './style.css';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
