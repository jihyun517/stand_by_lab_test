import { ReactElement } from 'react';

import numToMoney from '@/utils/num-to-money';

const Checkout = (): ReactElement => {
  return (
    <div className={'mb-auto w-[15rem] py-2 px-6 border-t-2 border-black bg-stone-100'}>
      <div className={'text-sm font-bold flex justify-between mb-3'}>
        <p>상품 금액</p>
        <p>{numToMoney(10000)}원</p>
      </div>

      <div className={'text-xs text-sky-400 font-bold border-b-[1px] border-gray-200 flex justify-between pb-3 mb-3'}>
        <p>VIP 할인</p>
        <p>-10%</p>
      </div>

      <div className={'text-sm font-bold border-b-[1px] border-gray-200 flex justify-between pb-3 mb-3'}>
        <p>배송비</p>
        <p>0원</p>
      </div>

      <div className={'flex flex-col items-end mb-4'}>
        <p className={'text-sm font-bold'}>예상 결제 금액</p>
        <p className={'text-2xl font-bold text-red-600'}>{numToMoney(49905)}원</p>
      </div>

      <button className={'w-full p-4 text-sm font-bold text-white bg-red-600 mt-4 mb-4 '}>전체 상품 주문하기</button>
    </div>
  );
};

export default Checkout;
