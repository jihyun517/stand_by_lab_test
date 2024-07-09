import { ReactElement, useState } from 'react';

import { useShopState } from '@/context';
import { useShopOperators } from '@/context';

import CartProductCard from '@/components/CartProductCard';

const CartList = (): ReactElement => {
  const { cart } = useShopState();
  const { addToCart } = useShopOperators();

  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const productData = e.dataTransfer.getData('product');
    if (productData) {
      const product = JSON.parse(productData);
      addToCart(product);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isDragOver) setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  return (
    <div
      className={`w-[50rem] border-t-2 border-black  ${isDragOver && 'bg-stone-100'}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <div className={'h-12 flex items-center border-b-[1px] border-gray-200 text-sm font-extrabold'}>
        <p className={'w-[32rem] flex justify-center'}>상품정보</p>
        <p className={'w-[7rem] flex justify-center'}>수량</p>
        <p className={'w-[9rem] flex justify-center'}>가격</p>
      </div>

      {cart.map((item) => (
        <CartProductCard key={item.product.id} cartItem={item} />
      ))}
    </div>
  );
};

export default CartList;
