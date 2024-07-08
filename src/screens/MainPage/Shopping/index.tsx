import { ReactElement } from 'react';

import { useShopState } from '@/context';

import ProductCard from '@/components/ProductCard';

const Shopping = (): ReactElement => {
  const { products } = useShopState();

  return (
    <div className={'w-[67rem] flex flex-col items-start gap-5'}>
      <p className={'text-3xl font-bold'}>Apple Watch 쇼핑하기</p>
      <div className={'flex gap-2'}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} className={'w-32 h-32'} />
        ))}
      </div>
    </div>
  );
};

export default Shopping;
