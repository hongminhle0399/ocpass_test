import { useOrders } from "../hooks";

export const OrderTable = () => {
  const { error, data, handleRefetchNextPage, loading, hasNextPage } =
    useOrders();


  return <div>

  </div>;
};
