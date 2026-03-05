import type {
  OrderFilterModel,
  OrderFilterControl,
  OrderModel
} from "../types";

export const DEFAULT_TAKE_NUMBER = 10;

export const SCROLL_TABLE_TO_VIEW_DELAY = 500;

export const ORDERS_FILTER_DEFAULT_STATE: OrderFilterModel = {
  orderDateRange: null,
  customerPhone: null,
  shippedDateRange: null,
};

export const FILTER_CATEGORIES: OrderFilterControl = {
  orderDateRange: {
    label: "Order Date",
    defaultValue: null,
  },
  shippedDateRange: {
    label: "Shipped Date",
    defaultValue: null,
  },
  customerPhone: {
    label: "Customer Number",
    placeholder: "Filter By Customer Number: 0128392911",
    defaultValue: ""
  }
};

export const ORDERS_COLUMNS: OrderModel = {
  id: "ID",
  orderDate: "Order Date",
  shipName: "Ship Name",
  shipAddress: "Ship Address",
  customerPhone: "Customer Phone",
};

export const TAKE_OPTIONS: number[] = [10, 20, 40]