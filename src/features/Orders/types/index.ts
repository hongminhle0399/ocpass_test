import type { GetOrdersQuery } from "@/graphql/__generated__/graphql";
import type { RangeValue } from "@heroui/react";
import type { DateValue } from "@internationalized/date";

export type OrderQueryNode = NonNullable<
  NonNullable<GetOrdersQuery["orders"]>["nodes"]
>[number];

export type OrderModel = {
  id: string | null;
  shipName: string | null;
  shipAddress: string | null;
  shipCountry: string | null;
  customerId: string | null;
  orderDate: string | null;
  shippedDate: string | null;
  customerContactName: string | null;
  customerPhone: string | null;
  employeeName: string | null;
};

export type OrderKey = keyof OrderModel;

interface PaginationData {
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface OrderData {
  orders: OrderModel[];
  pageInfor: PaginationData;
}

export type OrderColumnKey = keyof OrderModel;
export type OrderColumnItem = { [K in OrderKey]: string };

// FOR FILTER
export type DatePickerValue = RangeValue<DateValue>;

export type InputFilterField = Pick<OrderModel, "shipAddress" | "customerId" | "customerPhone">;
export type DateFilterField = {
  orderDateRange: DatePickerValue | null
  shippedDateRange: DatePickerValue | null
}
export type OrderFilterModel = InputFilterField & DateFilterField;
export type OrderFilterModelKey = keyof OrderFilterModel;

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

export type OrderFilterControl = {
  [K in OrderFilterModelKey]: K extends keyof InputFilterField
    ? InputFilter<OrderFilterModel[K]>
    : DateFilter<OrderFilterModel[K]> | null;
};

export type OrderFilterControlKey = keyof OrderFilterControl;
export type FilterHandler = (...args: any[]) => void;
export type FilterHanlderProvider = Record<OrderFilterControlKey, FilterHandler>;
