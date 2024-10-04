import { FoodItem } from "./restaurant";

export type CartItem = {
  item: FoodItem;
  quantity: number;
};
export type Order = {
  id: number;
  name: string;
  typeOfCuisine: string;
  timeOrdered: string;
  totalPrice: number;
  totalDeliveryPrice: number;
  items: CartItem[];
  smallImage: string;
};
export type StoreState = {
  cart: CartItem[];
  orders: Order[];
  addToCart: (item: FoodItem, quantity: number) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  placeOrder: (orderDetails: Order) => void;
};


