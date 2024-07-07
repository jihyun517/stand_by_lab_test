import { ReactElement } from 'react';

import CartList from './CartList';
import Checkout from './Checkout';

const Cart = (): ReactElement => {
  return (
    <div className={'w-[67rem] flex flex-col items-start gap-5'}>
      <p className={'text-3xl font-bold'}>장바구니</p>
      <div className={'flex gap-8'}>
        <CartList />
        <Checkout />
      </div>
    </div>
  );
};

export default Cart;
