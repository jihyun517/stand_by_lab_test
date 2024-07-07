export interface Product {
  id: number;
  imageURL: string;
  name: string;
  price: number;
}

export interface CartItem {
  product: Product;
  count: number;
}
