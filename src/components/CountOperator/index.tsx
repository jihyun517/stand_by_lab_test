import { ReactElement } from 'react';

import { CartItem } from '@/types';

import styles from './styles.module.scss';

interface Props {
  cartItem: CartItem;
}

const CountOperator = (props: Props): ReactElement => {
  const { cartItem } = props;

  return (
    <div className={'w-[7rem] border-[1px] border-gray-200 flex items-center justify-between'}>
      <button className={styles.MinusIcon} />
      <p className={'text-lg font-bold'}>{cartItem.count}</p>
      <button className={styles.PlusIcon} />
    </div>
  );
};

export default CountOperator;
