import { ReactElement, memo } from 'react';

import { Product } from '@/types';

import numToMoney from '@/utils/num-to-money';
import cx from '@/utils/style-helper';

import { useDragAndDrop } from '@/hooks/useDragAndDrop';

import AddToCartButton from '@/components/AddToCartButton';
import ProductName from '@/components//ProductName';

import styles from './styles.module.scss';

interface Props {
  product: Product;
  className?: string;
}

const ProductCard = memo((props: Props): ReactElement => {
  const { product, className } = props;
  const { handleDragStart } = useDragAndDrop();

  return (
    <div className={cx('w-52 h-80 flex flex-col items-start', className)} draggable onDragStart={(e) => handleDragStart(e, product)}>
      <div className={'relative w-full h-52 '}>
        <img src={product.imageURL} alt={product.name} className={styles.ProductImage} />
        <AddToCartButton product={product} />
      </div>

      <ProductName name={product.name} className={'text-xs font-semibold mt-3'} />

      <p className={'text-sm font-extrabold mt-5'}>{numToMoney(product.price)}원</p>
    </div>
  );
});

export default ProductCard;
