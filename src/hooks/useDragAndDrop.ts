import { useState, useRef, useCallback } from 'react';

import { Product } from '@/types';

import { useCartOperator } from '@/context';

interface DragAndDropHandlers {
  isDragOver: boolean;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, product: Product) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragEnter: () => void;
  handleDragLeave: () => void;
}

export const useDragAndDrop = (): DragAndDropHandlers => {
  const { addToCart } = useCartOperator();

  // Drag가 요소 위에 존재하는지 여부를 판단
  const [isDragOver, setIsDragOver] = useState(false);

  // isDragOver의 빈번한 상태변화를 방지하고자 drag Enter, Leave에 따른 횟수를 추적
  const dragTracker = useRef(0);

  // Drag Start
  const handleDragStart = useCallback((e: React.DragEvent<HTMLDivElement>, product: Product) => {
    e.dataTransfer.setData('product', JSON.stringify(product)); // 드래그 요소 저장
  }, []);

  // Drag Drop
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    dragTracker.current = 0; // drop이 완료되었으므로 dragTracker 초기화

    // 드래그 요소 가져와서 장바구니에 추가
    const productData = e.dataTransfer.getData('product');
    if (productData) {
      const product = JSON.parse(productData);
      addToCart(product);
    }
  }, []);

  // Drag가 요소 위에 지나갈 때 발생
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  // Drag가 요소에 올라갔을 때 발생
  const handleDragEnter = useCallback(() => {
    dragTracker.current++; // Enter 실행될 때마다 ++
    if (dragTracker.current === 1) setIsDragOver(true); // 맨 처음 Enter일 때 setIsDragOver(true)
  }, []);

  // Drag가 요소에 벗어났을 때 발생
  const handleDragLeave = useCallback(() => {
    dragTracker.current--; // Leave 실행될 때마다 --
    if (dragTracker.current === 0) setIsDragOver(false); // 맨 처음 Enter 였던 요소까지 Leave 되어 dragTracker가 0이 되었을 때 setIsDragOver(false)
  }, []);

  return {
    handleDragStart,
    isDragOver,
    handleDrop,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
  };
};
