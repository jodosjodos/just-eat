import { orderStatusStoreType } from "@/types";
import { create } from "zustand";
import { createSelectors } from "./create-selectors";
const orderStore = create<orderStatusStoreType>((set) => ({
  orderStatus: "pending",
  setOrderStatus: (status) => set({ orderStatus: status }),
  resetOrderStatus: () => set({ orderStatus: "pending" }),
}));

export const useOrderStatusSelector = createSelectors(orderStore);
