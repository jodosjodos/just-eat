import { Order, StoreState } from "@/types";
import { create } from "zustand";
import { createSelectors } from "./create-selectors";

export const useStore = create<StoreState>((set) => ({
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
  placeOrder: (orderDetails) =>
    set((state) => {
      // Extract the ids of the items being ordered
      const orderedItemIds = orderDetails.items.map((item) => item.item.id);

      // Filter out the ordered items from the cart
      const orderedItems = state.cart.filter((cartItem) =>
        orderedItemIds.includes(cartItem.item.id)
      );

      const totalOrderPrice = orderedItems.reduce(
        (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
        0
      );

      const totalDeliveryPrice = totalOrderPrice > 2000 ? 0 : 500;

      const newOrder: Order = {
        ...orderDetails,
        totalPrice: totalOrderPrice,
        totalDeliveryPrice,
        items: orderedItems,
      };

      const remainingCartItems = state.cart.filter(
        (cartItem) => !orderedItemIds.includes(cartItem.item.id)
      );

      return {
        orders: [...state.orders, newOrder],
        cart: remainingCartItems, // Only remove the ordered items from the cart
      };
    }),
}));

export const useStoreSelectors = createSelectors(useStore);
