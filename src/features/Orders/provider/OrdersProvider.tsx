import {
  createContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { useOrders } from "../hooks";
import type { OrderModel } from "../types";
import { toOrderModel } from "../utils";

interface OrderProviderContextType {
  filteredOrders: OrderModel[] | undefined;
  ordersFilters: OrderModel;
  orders: OrderModel[] | undefined;
  takeNumber: number;
  loading: boolean;
  hasNextPage: boolean;
  setOrdersFilters: (order: OrderModel) => void;
  setTakeNumber: (takeNumber: number) => void;
  onFetchMore: () => void;
}

const ORDERS_FILTER_DEFAULT_STATE: OrderModel = {
  customerContactName: "",
  customerId: "",
  employeeName: "",
  orderDate: undefined,
  shippedDate: undefined,
  shipAddress: "",
  shipCountry: "",
  shipName: "",
};

const DEFAULT_TAKE_NUMBER = 10;

export const OrdersContext = createContext<OrderProviderContextType>(
  {} as OrderProviderContextType,
);

export const OrdersProvider = ({ children }: PropsWithChildren) => {
  const [ordersFilters, setOrdersFilters] = useState<OrderModel>(
    ORDERS_FILTER_DEFAULT_STATE,
  );
  const [takeNumber, setTakeNumber] = useState<number>(DEFAULT_TAKE_NUMBER);
  const { data, onFetchMore, loading, hasNextPage } = useOrders({
    first: takeNumber,
  });

  const orders: OrderModel[] | undefined = useMemo(() => {
    const orderModels: OrderModel[] | undefined =
      data?.orders?.nodes?.map((item) => toOrderModel(item));
    return orderModels;
  }, [data]);

  const filteredOrders = useMemo(() => {
    return orders;
  }, [ordersFilters, orders]);

  return (
    <OrdersContext.Provider
      value={{
        ordersFilters,
        filteredOrders,
        orders,
        loading,
        takeNumber,
        hasNextPage,
        setOrdersFilters,
        setTakeNumber,
        onFetchMore,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
