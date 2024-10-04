import { ImageSourcePropType } from "react-native";
import { FoodItem } from "./restaurant";

export type CartItem = {
  item: FoodItem;
  quantity: number;
};
export type Order = {
  id: number;
  name: string;
  typeOfCuisine: string;
  timeOrdered: string; // assuming this is the order time as a string
  totalPrice: string; // price as a string
  totalDeliveryPrice: string; // delivery price as a string
  smallImage: ImageSourcePropType;
};
export type StoreState = {
  cart: CartItem[];
  orders: Order[];
  addToCart: (item: FoodItem, quantity: number) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  placeOrder: (orderDetails: Order) => void;
};


