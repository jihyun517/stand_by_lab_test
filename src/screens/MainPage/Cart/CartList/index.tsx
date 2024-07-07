import { ReactElement } from 'react';

import CartProductCard from '@/components/CartProductCard';

const CartList = (): ReactElement => {
  const dummyCartItem = {
    product: { id: 1, name: '실버 알루미늄 케이스, 그리고 Nike 스포츠 루프', price: 10000, imageURL: '/Images/whatch_1.png' },
    count: 2,
  };

  return (
    <div className={'w-[50rem] border-t-2 border-black'}>
      <div className={'h-12 flex items-center border-b-[1px] border-gray-200 text-sm font-extrabold'}>
        <p className={'w-[32rem] flex justify-center'}>상품정보</p>
        <p className={'w-[7rem] flex justify-center'}>수량</p>
        <p className={'w-[9rem] flex justify-center'}>가격</p>
      </div>
      <CartProductCard cartItem={dummyCartItem} />
      <CartProductCard cartItem={dummyCartItem} />
      <CartProductCard cartItem={dummyCartItem} />
      <CartProductCard cartItem={dummyCartItem} />
    </div>
  );
};

export default CartList;
