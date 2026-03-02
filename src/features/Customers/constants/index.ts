import type {
  OrderColumnItem,
  CustomerFilterModel,
  CustomerFilterControl,
} from "../types";

export const DEFAULT_TAKE_NUMBER = 10;

export const SCROLL_TABLE_TO_VIEW_DELAY = 500;

export const CUSTOMERS_FILTER_DEFAULT_STATE: CustomerFilterModel = {
  id: null,
  phone: null,
  contactName: null,
};

export const FILTER_CATEGORIES: CustomerFilterControl = {
  id: {
    label: "Customer ID",
    placeholder: "Filter By Customer ID",
    defaultValue: "",
  },
  phone: {
    label: "Phone Number",
    placeholder: "Filter By Customer's Phone: 0123485373",
    defaultValue: "",
  },
  contactName: {
    label: "Contact Name",
    placeholder: "Filter By Contact's Name",
    defaultValue: "",
  },
};

export const CUSTOMERS_COLUMN: OrderColumnItem = {
  id: "ID",
  city: "City",
  companyName: "Company Name",
  contactName: "Contact Name",
  contactTitle: "Contact Title",
  country: "Country",
  phone: "Phone",
  postalCode: "Postal Code",
};

export const CUSTOMERS_CACHE_KEY = "customers";

export const TAKE_OPTIONS: number[] = [10, 20, 40];
