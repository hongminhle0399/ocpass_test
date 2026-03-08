import type {
  OrderFilterModel,
  OrderFilterControl,
  OrderColumn
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

export const ORDERS_COLUMNS: OrderColumn = {
  id: "ID",
  orderDate: "Order Date",
  customer: "Customer",
  shipVia: "Ship Via",
  shipRegion: "Region",
  shipCountry: "Country",
  shipName: "Ship Name",
  shipAddress: "Ship Address",
};

export const TAKE_OPTIONS: string[] = [10, 20, 40].map(String)