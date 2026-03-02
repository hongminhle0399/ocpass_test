import type { GetCustomersQuery } from "@/graphql/__generated__/graphql";
import type { RangeValue } from "@heroui/react";
import type { DateValue } from "@internationalized/date";

export type CustomerQueryNode = NonNullable<
  NonNullable<GetCustomersQuery["customers"]>["nodes"]
>[number];

export type CustomerModel = {
  id: string | null;
  contactName: string | null;
  contactTitle: string | null;
  companyName: string | null;
  phone: string | null;
  city: string | null;
  country: string | null;
  postalCode: string | null;
};

export type CustomerKey = keyof CustomerModel;

interface PaginationData {
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface CustomerData {
  orders: CustomerModel[];
  pageInfor: PaginationData;
}

export type OrderColumnKey = keyof CustomerModel;
export type OrderColumnItem = { [K in CustomerKey]: string };

// FOR FILTER
export type DatePickerValue = RangeValue<DateValue>;

export type InputFilterField = Pick<CustomerModel, 'id' | 'phone' | 'contactName'>
export type CustomerFilterModel = InputFilterField;
export type CustomerFilterModelKey = keyof CustomerFilterModel;

type BaseFilter = {
  label: string;
};

export type InputFilter<T = string> = {
  placeholder: string;
  defaultValue: T;
} & BaseFilter;

export type DateFilter<T = DatePickerValue> = {
  defaultValue: T;
} & BaseFilter;

export type CustomerFilterControl = {
  [K in CustomerFilterModelKey]: K extends keyof InputFilterField
    ? InputFilter<CustomerFilterModel[K]>
    : DateFilter<CustomerFilterModel[K]> | null;
};

export type CustomerFilterControlKey = keyof CustomerFilterControl;
export type FilterHandler = (...args: any[]) => void;
export type FilterHanlderProvider = Record<CustomerFilterControlKey, FilterHandler>;
