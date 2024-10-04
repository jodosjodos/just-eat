import { Order, StoreState } from "@/types";
import { create } from "zustand";
import { createSelectors } from "./create-selectors";

const useStore = create<StoreState>((set) => ({
  cart: [],
  orders: [],
  addToCart: (item, quantity) =>
    set((state) => {
      const existingItem = state.cart.findIndex(
        (cartItem) => cartItem.item.id === item.id
      );
      if (existingItem >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[existingItem].quantity += quantity;
        return { cart: updatedCart };
      }
      return { cart: [...state.cart, { item, quantity }] };
    }),
  removeFromCart: (itemId) => {
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.item.id !== itemId),
    }));
  },
  clearCart: () => set({ cart: [] }),
  placeOrder: (orderDetails: Order) =>
    set((state) => {
      const newOrder: Order = {
        id: orderDetails.id,
        name: orderDetails.name,
        typeOfCuisine: orderDetails.typeOfCuisine, // FoodItem Category
        timeOrdered: orderDetails.timeOrdered, // Set current time for the order
        totalPrice: orderDetails.totalPrice, // String format of total price
        totalDeliveryPrice: orderDetails.totalDeliveryPrice, // String format of delivery price
        smallImage: orderDetails.smallImage, // Image reference for the order
      };

      return {
        orders: [...state.orders, newOrder], // Append new order to the orders list
      };
    }),
}));

export const useStoreSelectors = createSelectors(useStore);
