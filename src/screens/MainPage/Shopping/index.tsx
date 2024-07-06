import ProductCard from '@/components/ProductCard';

const Shopping = () => {
  const dummyProduct = {
    id: 1,
    name: '실버 알루미늄 케이스, 그리고 Nike 스포츠 루프',
    price: 10000,
    imageURL: '/Images/whatch_1.png',
  };

  return (
    <div className={'flex flex-col items-start gap-5'}>
      <p className={'text-3xl font-bold'}>Apple Watch 쇼핑하기</p>
      <div className={'flex gap-2'}>
        <ProductCard product={dummyProduct} className={'w-32 h-32'} />
        <ProductCard product={dummyProduct} className={'w-32 h-32'} />
        <ProductCard product={dummyProduct} className={'w-32 h-32'} />
        <ProductCard product={dummyProduct} className={'w-32 h-32'} />
        <ProductCard product={dummyProduct} className={'w-32 h-32'} />
      </div>
    </div>
  );
};

export default Shopping;
