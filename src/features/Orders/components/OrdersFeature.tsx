import { OrdersFilter } from "./OrdersFilter";
import { OrdersTable } from "./OrdersTable";

export const OrdersFeature = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <OrdersFilter />
      <OrdersTable />
    </div>
  );
};
