import React from 'react';
import { render } from 'react-dom';
import Cart from './src/components/Cart/Cart';
import Layout from './src/components/Layout/Layout';
import Products from './src/components/Shop/Products';

import './style.css';

function App() {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

render(<App />, document.getElementById('root'));
