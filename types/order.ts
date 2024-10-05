export type orderStatusStoreType = {
  orderStatus: string;
  setOrderStatus: (newOrderStatus: string) => void;
  resetOrderStatus: () => void;
};
