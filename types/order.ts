export type orderStatusStoreType = {
  orderStatus: string;
  setOrderStatus: (newOrderStatus: string) => void;
  resetOrderStatus: () => void;
  nextOrderStatus: () => void;
  previousOrderStatus: () => void;
};
