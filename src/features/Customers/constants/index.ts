import type {
  CustomerFilterControl,
  CustomerFilterModel,
  CustomerModel
} from "../types";

export const DEFAULT_TAKE_NUMBER = 10;

export const SCROLL_TABLE_TO_VIEW_DELAY = 500;

export const ORDERS_FILTER_DEFAULT_STATE: CustomerFilterModel = {
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

export const ORDERS_COLUMNS: CustomerModel = {
  id: "ID",
  company: "Company",
  contactName: "Contact Name",
  country: "Country",
  fax: "Fax",
};

export const TAKE_OPTIONS: number[] = [10, 20, 40];
