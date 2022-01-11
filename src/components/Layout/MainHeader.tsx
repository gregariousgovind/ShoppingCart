import React from 'react';
import CartButton from '../Cart/CartButton';
import './MainHeader.scss';

const MainHeader = (props) => {
  return (
    <header className="header">
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
