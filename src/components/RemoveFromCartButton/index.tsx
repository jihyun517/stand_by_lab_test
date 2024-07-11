import { ReactElement } from 'react';

import { useCartOperator } from '@/context';

import { CartItem } from '@/types';

import styles from './styles.module.scss';

interface Props {
  cartItem: CartItem;
}

const RemoveFromCartButton = (props: Props): ReactElement => {
  const { cartItem } = props;

  const { removeFromCart } = useCartOperator();

  return <button className={styles.DeleteIcon} onClick={() => removeFromCart(cartItem.product.id)} />;
};

export default RemoveFromCartButton;
