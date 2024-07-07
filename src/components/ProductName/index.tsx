import splitNameByComma from '@/utils/split-name-by-comma';
import cx from '@/utils/style-helper';

interface Props {
  name: string;
  className?: string;
}

const ProductName = (props: Props) => {
  const { name, className } = props;

  const { firstLine, secondLine } = splitNameByComma(name);

  return (
    <div className={cx('flex flex-col items-start', className)}>
      <p>{firstLine}</p>
      <p>{secondLine}</p>
    </div>
  );
};

export default ProductName;
