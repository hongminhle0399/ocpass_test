import { create } from "zustand";
import type { CustomerFilterModel } from "../types";
import { CUSTOMERS_FILTER_DEFAULT_STATE, TAKE_OPTIONS } from "../constants";
import { immer } from "zustand/middleware/immer";

interface CustomersState {
  customersFilter: CustomerFilterModel;
  takeNumber: number;
  updateCustomersFilter: (filter: Partial<CustomerFilterModel>) => void;
  setTakeNumber: (takeNumber: number) => void;
}

export const useCustomersStore = create<CustomersState>()(
  immer((set) => ({
    takeNumber: TAKE_OPTIONS[0],
    customersFilter: CUSTOMERS_FILTER_DEFAULT_STATE,
    updateCustomersFilter: (filter: Partial<CustomerFilterModel>) => {
      set((state) => {
        Object.assign(state.customersFilter, filter);
      });
    },
    setTakeNumber: (take: number) => set((state) => (state.takeNumber = take)),
  })),
);
