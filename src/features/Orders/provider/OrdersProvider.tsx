import {
  createContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { useOrders } from "../hooks";
import type { Order } from "../types";

interface OrderProviderContextType {
  filteredOrders: Order[];
  ordersFilters: Order;
  orders: Order[];
  takeNumber: number;
  loading: boolean;
  hasNextPage: boolean;
  setOrdersFilers: (order: Order) => void;
  setTakeNumber: (takeNumber: number) => void
  onFetchMore: () => void
}

const ORDERS_FILTER_DEFAULT_STATE: Order = {
  id: "",
  __typename: "Order",
  customer: null,
  customerId: null,
  employee: null,
  orderDate: "",
  shipAddress: "",
  shipCountry: "",
  shipName: "",
  shippedDate: "",
};

const DEFAULT_TAKE_NUMBER = 10;

export const OrdersContext = createContext<OrderProviderContextType>(
  {} as OrderProviderContextType,
);

export const OrdersProvider = ({ children }: PropsWithChildren) => {
  const [ordersFilters, setOrdersFilers] = useState<Order>(
    ORDERS_FILTER_DEFAULT_STATE,
  );
  const [takeNumber, setTakeNumber] = useState<number>(DEFAULT_TAKE_NUMBER);
  const { data, onFetchMore, loading, hasNextPage } = useOrders({
    first: takeNumber,
  });

  const orders: Order[] = useMemo(
    () => data?.orders?.nodes?.filter((o): o is Order => o != null) ?? [],
    [data],
  );

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
        setOrdersFilers,
        setTakeNumber,
        onFetchMore
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
