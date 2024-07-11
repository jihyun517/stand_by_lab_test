import { ReactElement } from 'react';

import { useCartOperator } from '@/context';

import { Product } from '@/types';

import styles from './styles.module.scss';

interface Props {
  product: Product;
}

const AddToCartButton = (props: Props): ReactElement => {
  const { product } = props;

  const { addToCart } = useCartOperator();

  return <button className={styles.CartIcon} onClick={() => addToCart(product)} />;
};

export default AddToCartButton;
