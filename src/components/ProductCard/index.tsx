import splitNameByComma from '@/utils/split-name-by-comma';
import numToMoney from '@/utils/num-to-money';
import cx from '@/utils/style-helper';

import { Product } from '@/types';

import styles from './styles.module.scss';

interface Props {
  product: Product;
  className?: string;
}

const ProductCard = (props: Props) => {
  const { product, className } = props;

  const { firstLine, secondLine } = splitNameByComma(product.name);

  return (
    <div className={cx('w-52 flex flex-col items-start', className)}>
      <div className={'relative w-full h-52 '}>
        <img src={product.imageURL} alt={product.name} className={styles.ProductImage} />
        <button className={styles.CartIcon}></button>
      </div>

      <div className={'flex flex-col items-start text-xs font-semibold mt-3'}>
        <p>{firstLine}</p>
        <p>{secondLine}</p>
      </div>

      <p className={'text-sm font-extrabold mt-5'}>{numToMoney(product.price)}원</p>
    </div>
  );
};

export default ProductCard;
