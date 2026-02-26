import { OrdersProvider } from "../provider";
import { OrdersFilter } from "./OrdersFilters";
import { OrdersTable } from "./OrdersTable";

export const OrdersFeature = () => {
  return (
    <OrdersProvider>
      <div className="flex flex-col gap-y-4">
        <OrdersFilter />
        <OrdersTable />
      </div>
    </OrdersProvider>
  );
};
