import { useState, useRef, useCallback } from 'react';

import { Product } from '@/types';

interface Props {
  addToCart: (product: Product) => void;
}

interface DragAndDropHandlers {
  isDragOver: boolean;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragEnter: () => void;
  handleDragLeave: () => void;
}

export const useDragAndDrop = (props: Props): DragAndDropHandlers => {
  const { addToCart } = props;

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

  return {
    isDragOver,
    handleDrop,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
  };
};
