import { ReactElement } from 'react';

import { useCartOperator } from '@/context';

import numToMoney from '@/utils/num-to-money';

interface Props {
  finalAmount: number;
}

const OrderButton = (props: Props): ReactElement => {
  const { finalAmount } = props;

  const { clearCart } = useCartOperator();

  const onClick = () => {
    alert(`김지현님 ${numToMoney(finalAmount)}원이 결제완료 되었습니다.`);
    clearCart();
  };

  return (
    <button className={'w-full p-4 text-sm font-bold text-white bg-red-600 mt-4 mb-4'} onClick={onClick}>
      전체 상품 주문하기
    </button>
  );
};

export default OrderButton;
