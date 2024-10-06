import { orderStatusStoreType } from "@/types";
import { create } from "zustand";
import { createSelectors } from "./create-selectors";

// Define the possible order statuses
const orderStatuses = ["accepted", "preparing", "ready", "on-the-way", "delivered"];

const orderStore = create<orderStatusStoreType>((set) => ({
  orderStatus: orderStatuses[0], // Default to the first status
  setOrderStatus: (status) => set({ orderStatus: status }),
  resetOrderStatus: () => set({ orderStatus: orderStatuses[0] }),
  nextOrderStatus: () =>
    set((state) => {
      const currentIndex = orderStatuses.indexOf(state.orderStatus);
      const nextIndex = Math.min(currentIndex + 1, orderStatuses.length - 1);
      return { orderStatus: orderStatuses[nextIndex] };
    }),
  previousOrderStatus: () =>
    set((state) => {
      const currentIndex = orderStatuses.indexOf(state.orderStatus);
      const prevIndex = Math.max(currentIndex - 1, 0);
      return { orderStatus: orderStatuses[prevIndex] };
    }),
}));

export const useOrderStatusSelector = createSelectors(orderStore);
