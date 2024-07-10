import { ReactElement } from 'react';

import { useShopState } from '@/context';

import ProductCard from '@/components/ProductCard';

const Shopping = (): ReactElement => {
  const { products } = useShopState();

  return (
    <div className={'w-full flex justify-center'}>
      <div className={'flex flex-col items-start gap-5'}>
        <p className={'text-3xl font-bold'}>Apple Watch 쇼핑하기</p>
        <div className={'flex flex-wrap gap-2'}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shopping;
