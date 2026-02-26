import type { GetOrdersQuery } from "@/graphql/__generated__/graphql";

export type Order = NonNullable<
  NonNullable<GetOrdersQuery["orders"]>["nodes"]
>[number];

export type ColumnKey<T> =
  | keyof Omit<T, "__typename">

export type ColumnItem<T extends string | number> = Record<T, string>
