import { ReactElement } from 'react';

import { useCartState } from '@/context';

import numToMoney from '@/utils/num-to-money';
import calcCheckoutInfo from '@/utils/calc-checkout-info';

import OrderButton from '@/components/OrderButton';

const Checkout = (): ReactElement => {
  const { cart } = useCartState();

  const { totalAmount, discount, deliveryFee, finalAmount } = calcCheckoutInfo(cart);

  return (
    <div className={'mb-auto w-[15rem] py-2 px-6 border-t-2 border-black bg-stone-100'}>
      <div className={'text-sm font-bold flex justify-between mb-3'}>
        <p>상품 금액</p>
        <p>{numToMoney(totalAmount)}원</p>
      </div>
      {discount > 0 && (
        <div className={'text-xs text-sky-400 font-bold  flex justify-between mb-3'}>
          <p>VIP 할인</p>
          <p>-{discount * 100}%</p>
        </div>
      )}

      <div className={'text-sm font-bold border-y-[1px] border-gray-200 flex justify-between py-3 mb-3'}>
        <p>배송비</p>
        <p>{numToMoney(deliveryFee)}원</p>
      </div>

      <div className={'flex flex-col items-end mb-4'}>
        <p className={'text-sm font-bold'}>예상 결제 금액</p>
        <p className={'text-2xl font-bold text-red-600'}>{numToMoney(finalAmount)}원</p>
      </div>

      {finalAmount > 0 && <OrderButton finalAmount={finalAmount} />}
    </div>
  );
};

export default Checkout;
