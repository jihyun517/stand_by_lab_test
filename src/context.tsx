import React, { createContext, useContext, useState, ReactNode, ReactElement, useCallback, useMemo, useEffect } from 'react';
import { Product, CartItem } from '@/types';

interface ProductsState {
  products: Product[];
}

interface CartState {
  cart: CartItem[];
}

interface CartOperator {
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseCount: (productId: number) => void;
  decreaseCount: (productId: number) => void;
  clearCart: () => void;
}

interface Props {
  children?: ReactNode;
}

const DEFAULT_PRODUCTS_STATE: ProductsState = {
  products: [
    { id: 1, imageURL: '/Images/whatch_1.png', name: '실버 알루미늄 케이스, 그리고 Nike 스포츠 루프', price: 10000 },
    { id: 2, imageURL: '/Images/whatch_2.png', name: '실버 알루미늄 케이스, 그리고 Nike 스포츠 밴드', price: 10000 },
    { id: 3, imageURL: '/Images/whatch_3.png', name: '실버 스테인리스 스틸 케이스, 그리고 모던 버클', price: 8500 },
    { id: 4, imageURL: '/Images/whatch_4.png', name: '골드 알루미늄 케이스, 그리고 브레이브 솔로 루프', price: 7000 },
    { id: 5, imageURL: '/Images/whatch_5.png', name: '스페이스 그레이 알루미늄 케이스, 그리고 스포츠 밴드', price: 5000 },
  ],
};

const DEFAULT_CART_STATE: CartState = {
  cart: [],
};

const DEFAULT_CART_OPERATOR: CartOperator = {
  addToCart() {},
  removeFromCart() {},
  increaseCount() {},
  decreaseCount() {},
  clearCart() {},
};

const ProductsStateContext = createContext<ProductsState>(DEFAULT_PRODUCTS_STATE);
const CartStateContext = createContext<CartState>(DEFAULT_CART_STATE);
const CartOperatorContext = createContext<CartOperator>(DEFAULT_CART_OPERATOR);

export const ShopProvider = (props: Props): ReactElement => {
  const { children } = props;

  const [products] = useState<Product[]>(DEFAULT_PRODUCTS_STATE.products);
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : DEFAULT_CART_STATE.cart;
  });

  // 상태 업데이트 시 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product: Product) => {
    setCart((prevCart) => {
      const cartItem = prevCart.find((item) => item.product.id === product.id);
      if (cartItem) {
        return prevCart.map((item) => (item.product.id === product.id ? { ...item, count: item.count + 1 } : item));
      }
      return [...prevCart, { product, count: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  }, []);

  const increaseCount = useCallback((productId: number) => {
    setCart((prevCart) => prevCart.map((item) => (item.product.id === productId ? { ...item, count: item.count + 1 } : item)));
  }, []);

  const decreaseCount = useCallback((productId: number) => {
    setCart((prevCart) => prevCart.map((item) => (item.product.id === productId && item.count > 1 ? { ...item, count: item.count - 1 } : item)));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const productsState = useMemo((): ProductsState => ({ products }), [products]);
  const cartState = useMemo((): CartState => ({ cart }), [cart]);
  const cartOperator = useMemo(
    (): CartOperator => ({
      addToCart,
      removeFromCart,
      increaseCount,
      decreaseCount,
      clearCart,
    }),
    [addToCart, removeFromCart, increaseCount, decreaseCount, clearCart]
  );

  return (
    <ProductsStateContext.Provider value={productsState}>
      <CartStateContext.Provider value={cartState}>
        <CartOperatorContext.Provider value={cartOperator}>{children}</CartOperatorContext.Provider>
      </CartStateContext.Provider>
    </ProductsStateContext.Provider>
  );
};

export const useProductsState = () => {
  const context = useContext(ProductsStateContext);
  if (!context) {
    throw new Error('useProductsState ERROR');
  }
  return context;
};

export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (!context) {
    throw new Error('useCartState ERROR');
  }
  return context;
};

export const useCartOperator = () => {
  const context = useContext(CartOperatorContext);
  if (!context) {
    throw new Error('useCartOperators ERROR');
  }
  return context;
};
