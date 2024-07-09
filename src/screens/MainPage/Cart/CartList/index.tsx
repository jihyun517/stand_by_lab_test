import { ReactElement, useState, useRef, useCallback } from 'react';

import { useShopState } from '@/context';
import { useShopOperators } from '@/context';

import CartProductCard from '@/components/CartProductCard';

const CartList = (): ReactElement => {
  const { cart } = useShopState();
  const { addToCart } = useShopOperators();

  const [isDragOver, setIsDragOver] = useState(false);

  const dragTracker = useRef(0); // drag Enter, Leave에 따른 횟수를 추적

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    dragTracker.current = 0; // drop이 완료되었으므로 dragTracker 초기화

    const productData = e.dataTransfer.getData('product');
    if (productData) {
      const product = JSON.parse(productData);
      addToCart(product);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleDragEnter = useCallback(() => {
    dragTracker.current++; // Enter 실행될 때마다 ++
    if (dragTracker.current === 1) setIsDragOver(true); // 맨 처음 Enter일 때 setIsDragOver(true)
  }, []);

  const handleDragLeave = useCallback(() => {
    dragTracker.current--; // Leave 실행될 때마다 --
    if (dragTracker.current === 0) setIsDragOver(false); // 맨 처음 Enter 였던 요소까지 Leave 되어 dragTracker가 0이 되었을 때 setIsDragOver(false)
  }, []);

  return (
    <div
      className={`w-[50rem] border-t-2 border-black  ${isDragOver && 'bg-stone-100'}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDragEnter={handleDragEnter}
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
