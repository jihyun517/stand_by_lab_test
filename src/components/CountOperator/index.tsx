import { ReactElement } from 'react';

import { useShopOperators } from '@/context';

import { CartItem } from '@/types';

import styles from './styles.module.scss';

interface Props {
  cartItem: CartItem;
}

const CountOperator = (props: Props): ReactElement => {
  const { cartItem } = props;

  const { increaseCount, decreaseCount } = useShopOperators();

  return (
    <div className={'w-[7rem] border-[1px] border-gray-200 flex items-center justify-between'}>
      <button className={styles.MinusIcon} onClick={() => decreaseCount(cartItem.product.id)} />
      <p className={'text-lg font-bold'}>{cartItem.count}</p>
      <button className={styles.PlusIcon} onClick={() => increaseCount(cartItem.product.id)} />
    </div>
  );
};

export default CountOperator;
