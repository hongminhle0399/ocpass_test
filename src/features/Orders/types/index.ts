import type { GetOrdersQuery } from "@/graphql/__generated__/graphql";
import type { DateValue, RangeValue } from "@heroui/react";

export type OrderQueryNode = NonNullable<
  NonNullable<GetOrdersQuery["orders"]>["nodes"]
>[number];

export type OrderModel = Partial<{
  id: string | null;
  shipName: string | null;
  shipAddress: string | null;
  shipCountry: string | null;
  customerId: string | null;
  orderDate: any;
  shippedDate: any;
  customerContactName: string | null;
  customerPhone: string | null;
  employeeName: string | null;
}>;

interface PaginationData {
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface OrderData {
  orders: OrderModel[];
  pageInfor: PaginationData;
}

export type OrderColumnKey = keyof OrderModel;
export interface OrderColumnItem extends OrderModel {}

export type OrderKey = keyof OrderModel;

type BaseFilter = {
  available: boolean;
  label: string;
};

export type InputFilter<T = string> = {
  placeholder: string;
  defaultValue: T;
} & BaseFilter;

export type DateFilter<T = RangeValue<DateValue>> = {
  defaultValue: T
} & BaseFilter;

export type OrderFilter = {
  [K in OrderKey]:
    | InputFilter<OrderModel[K]>
    | DateFilter<OrderModel[K]>
    | null;
};

export type FilterHandler = (...args: any[]) => void
export type FilterHanlderProvider = Record<OrderKey, FilterHandler>