import { Product } from '@/types';

import styles from './styles.module.scss';

interface Props {
  product: Product;
}

const AddToCartButton = (props: Props) => {
  const { product } = props;

  return <button className={styles.CartIcon} />;
};

export default AddToCartButton;
