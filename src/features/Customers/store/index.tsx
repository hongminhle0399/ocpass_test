import { create } from "zustand";
import type { CustomerFilterModel } from "../types";
import { CUSTOMERS_FILTER_DEFAULT_STATE, TAKE_OPTIONS } from "../constants";
import { immer } from "zustand/middleware/immer";

interface CustomersState {
  customersFilter: CustomerFilterModel;
  takeNumber: string;
  updateCustomersFilter: (order: Partial<CustomerFilterModel>) => void;
  setTakeNumber: (takeNumber: string) => void;
}

export const useCustomersStore = create<CustomersState>()(
  immer((set) => ({
    takeNumber: TAKE_OPTIONS[0],
    customersFilter: CUSTOMERS_FILTER_DEFAULT_STATE,
    updateCustomersFilter: (customersFilter: Partial<CustomerFilterModel>) => {
      set(
        (state) => {
          Object.assign(state.customersFilter, customersFilter)
        },
      );
    },
    setTakeNumber: (take: string) => set((state) => { state.takeNumber = take }),
  })),
);
