import type {
  OrderColumnItem,
  OrderColumnKey,
  OrderFilterModel,
  OrderFilterControl
} from "../types";

export const DEFAULT_TAKE_NUMBER = 10;

export const SCROLL_TABLE_TO_VIEW_DELAY = 500;

export const ORDERS_FILTER_DEFAULT_STATE: OrderFilterModel = {
  customerId: null,
  shipAddress: null,
  customerPhone: null,
  orderDateRange: null,
  shippedDateRange: null,
};

export const FILTER_CATEGORIES: OrderFilterControl = {
  customerId: {
    label: "Customer ID",
    placeholder: "Filter By Customer ID",
    defaultValue: "",
  },
  orderDateRange: {
    label: "Order Date",
    defaultValue: null,
  },
  shippedDateRange: {
    label: "Shipped Date",
    defaultValue: null,
  },
  shipAddress: {
    label: "Ship Address",
    placeholder: "Filter By Customer Name: Minh Le...",
    defaultValue: "",
  },
  customerPhone: {
    label: "Customer Number",
    placeholder: "Filter By Customer Number: 0128392911",
    defaultValue: ""
  }
};

export const ORDERS_COLUMNS: OrderColumnItem = {
  id: "ID",
  orderDate: "Order Date",
  shippedDate: "Shipped Date",
  customerContactName: "Contact Name",
  shipName: "Ship Name",
  shipAddress: "Ship Address",
  customerId: "Customer ID",
  customerPhone: "Customer Phone",
  employeeName: "Employee Name",
  shipCountry: "Ship Country",
};

export const COMPOSABLE_COLLUMS: OrderColumnKey[] = ["customerPhone"];

export const ORDERS_CACHE_KEY = 'orders'

export const TAKE_OPTIONS: number[] = [10, 20, 40]