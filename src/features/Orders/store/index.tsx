import { create } from "zustand";
import type { OrderFilterModel } from "../types";
import { ORDERS_FILTER_DEFAULT_STATE, TAKE_OPTIONS } from "../constants";
import { immer } from "zustand/middleware/immer";

interface OrdersState {
  ordersFilter: OrderFilterModel;
  takeNumber: string;
  updateOrdersFilter: (order: Partial<OrderFilterModel>) => void;
  setTakeNumber: (takeNumber: string) => void;
}

export const useOrdersStore = create<OrdersState>()(
  immer((set) => ({
    takeNumber: TAKE_OPTIONS[0],
    ordersFilter: ORDERS_FILTER_DEFAULT_STATE,
    updateOrdersFilter: (ordersFilter: Partial<OrderFilterModel>) => {
      set(
        (state) => {
          Object.assign(state.ordersFilter, ordersFilter)
        },
      );
    },
    setTakeNumber: (take: string) => set((state) => { state.takeNumber = take }),
  })),
);
