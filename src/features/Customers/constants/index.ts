import type {
  CustomerFilterControl,
  CustomerFilterModel,
  CustomerColumn
} from "../types";

export const SCROLL_TABLE_TO_VIEW_DELAY = 500;

export const CUSTOMERS_FILTER_DEFAULT_STATE: CustomerFilterModel = {
  company: null,
  contactName: null,
  id: null,
};

export const FILTER_CATEGORIES: CustomerFilterControl = {
  id: {
    defaultValue: "",
    label: "ID",
    placeholder: "Filter by id",
  },
  company: {
    defaultValue: "",
    label: "Company",
    placeholder: "Filter by company",
  },
  contactName: {
    defaultValue: "",
    label: "Contact Name",
    placeholder: "Filter by contact name",
  },
};

export const ORDERS_COLUMNS: CustomerColumn = {
  id: "ID",
  contactName: "Contact Name",
  company: "Company",
  fax: "Fax",
  country: "Country",
  totalOrders: "Orders",
};

export const TAKE_OPTIONS: string[] = [10, 20, 40].map(String);
