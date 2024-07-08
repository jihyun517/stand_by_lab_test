import { ReactElement } from 'react';

import { useShopState } from '@/context';

import CartProductCard from '@/components/CartProductCard';

const CartList = (): ReactElement => {
  const { cart } = useShopState();

  return (
    <div className={'w-[50rem] border-t-2 border-black'}>
      <div className={'h-12 flex items-center border-b-[1px] border-gray-200 text-sm font-extrabold'}>
        <p className={'w-[32rem] flex justify-center'}>상품정보</p>
        <p className={'w-[7rem] flex justify-center'}>수량</p>
        <p className={'w-[9rem] flex justify-center'}>가격</p>
      </div>

      {cart.map((item) => (
        <CartProductCard key={item.product.id} cartItem={item} />
      ))}
    </div>
  );
};

export default CartList;