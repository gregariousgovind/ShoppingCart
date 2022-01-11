import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Cart from './src/components/Cart/Cart';
import Layout from './src/components/Layout/Layout';
import Products from './src/components/Shop/Products';
import store from './src/store';

import './style.css';

function App() {
  return (
    <Layout>
      <Cart />
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
