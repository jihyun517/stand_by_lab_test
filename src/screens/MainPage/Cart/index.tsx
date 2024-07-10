import { ReactElement } from 'react';

import CartList from './CartList';
import Checkout from './Checkout';

const Cart = (): ReactElement => {
  return (
    <div className={'w-full flex justify-center'}>
      <div className={'flex flex-col items-start gap-5'}>
        <p className={'text-3xl font-bold'}>장바구니</p>
        <div className={'flex gap-8'}>
          <CartList />
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Cart;
