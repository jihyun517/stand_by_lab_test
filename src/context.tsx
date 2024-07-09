import React, { createContext, useContext, useState, ReactNode, ReactElement, useCallback, useMemo } from 'react';
import { Product, CartItem } from '@/types';

interface State {
  products: Product[];
  cart: CartItem[];
}

interface Operator {
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseCount: (productId: number) => void;
  decreaseCount: (productId: number) => void;
  clearCart: () => void;
}

interface Props {
  children?: ReactNode;
}

const DEFAULT_STATE: State = {
  products: [
    { id: 1, imageURL: '/Images/whatch_1.png', name: '실버 알루미늄 케이스, 그리고 Nike 스포츠 루프', price: 10000 },
    { id: 2, imageURL: '/Images/whatch_2.png', name: '실버 알루미늄 케이스, 그리고 Nike 스포츠 밴드', price: 10000 },
    { id: 3, imageURL: '/Images/whatch_3.png', name: '실버 스테인리스 스틸 케이스, 그리고 모던 버클', price: 8500 },
    { id: 4, imageURL: '/Images/whatch_4.png', name: '골드 알루미늄 케이스, 그리고 브레이브 솔로 루프', price: 7000 },
    { id: 5, imageURL: '/Images/whatch_5.png', name: '스페이스 그레이 알루미늄 케이스, 그리고 스포츠 밴드', price: 5000 },
  ],
  cart: [],
};

const DEFAULT_OPERATOR: Operator = {
  addToCart() {},
  removeFromCart() {},
  increaseCount() {},
  decreaseCount() {},
  clearCart() {},
};

const ShopStateContext = createContext<State>(DEFAULT_STATE);
const ShopOperatorsContext = createContext<Operator>(DEFAULT_OPERATOR);

export const ShopProvider = (props: Props): ReactElement => {
  const { children } = props;

  const [products] = useState<Product[]>(DEFAULT_STATE.products);
  const [cart, setCart] = useState<CartItem[]>(DEFAULT_STATE.cart);

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

  const state: State = { products, cart };
  const operator = useMemo(
    (): Operator => ({
      addToCart,
      removeFromCart,
      increaseCount,
      decreaseCount,
      clearCart,
    }),
    [addToCart, removeFromCart, increaseCount, decreaseCount, clearCart]
  );

  return (
    <ShopStateContext.Provider value={state}>
      <ShopOperatorsContext.Provider value={operator}>{children}</ShopOperatorsContext.Provider>
    </ShopStateContext.Provider>
  );
};

export const useShopState = () => {
  const context = useContext(ShopStateContext);
  if (!context) {
    throw new Error('useShopState ERROR');
  }
  return context;
};

export const useShopOperators = () => {
  const context = useContext(ShopOperatorsContext);
  if (!context) {
    throw new Error('useShopOperators ERROR');
  }
  return context;
};
