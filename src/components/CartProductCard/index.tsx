import { ReactElement } from 'react';

import numToMoney from '@/utils/num-to-money';
import cx from '@/utils/style-helper';

import { CartItem } from '@/types';

import ProductName from '@/components//ProductName';
import CountOperator from '@/components/CountOperator';
import RemoveFromCartButton from '@/components/RemoveFromCartButton';

import styles from './styles.module.scss';

interface Props {
  cartItem: CartItem;
  className?: string;
}

const CartProductCard = (props: Props): ReactElement => {
  const { cartItem, className } = props;

  return (
    <div className={cx('h-32 flex items-center border-b-[1px] border-gray-200', className)}>
      <div className={'w-[32rem] flex items-center'}>
        <img src={cartItem.product.imageURL} alt={cartItem.product.name} className={styles.ProductImage} />
        <ProductName name={cartItem.product.name} className={'text-sm font-bold ml-16'} />
      </div>
      <CountOperator cartItem={cartItem} />
      <p className={'w-[9rem] flex justify-center text-sm font-bold'}>{numToMoney(cartItem.product.price * cartItem.count)}원</p>
      <RemoveFromCartButton cartItem={cartItem} />
    </div>
  );
};

export default CartProductCard;
