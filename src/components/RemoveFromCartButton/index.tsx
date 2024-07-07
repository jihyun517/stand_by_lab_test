import { ReactElement } from 'react';

import { CartItem } from '@/types';

import styles from './styles.module.scss';

interface Props {
  cartItem: CartItem;
}

const RemoveFromCartButton = (props: Props): ReactElement => {
  const { cartItem } = props;

  return <button className={styles.DeleteIcon} />;
};

export default RemoveFromCartButton;
