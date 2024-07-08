import { ReactElement } from 'react';

import { CartItem } from '@/types';

interface CheckoutInfo {
  totalAmount: number;
  discount: number;
  deliveryFee: number;
  finalAmount: number;
}

const calcCheckoutInfo = (cart: CartItem[]): CheckoutInfo => {
  //totalAmount
  const totalAmount = cart.reduce((total, item) => total + item.product.price * item.count, 0);

  //discount
  let discount = 0;
  if (totalAmount >= 150000) discount = 0.2;
  else if (totalAmount >= 100000) discount = 0.15;
  else if (totalAmount >= 50000) discount = 0.1;

  //discountedAmount
  const discountedAmount = totalAmount * (1 - discount);

  //deliveryFee
  const deliveryFee = totalAmount < 50000 ? 2500 : 0;

  //finalAmount
  const finalAmount = totalAmount > 0 ? discountedAmount + deliveryFee : 0;

  return { totalAmount, discount, deliveryFee, finalAmount };
};
export default calcCheckoutInfo;
