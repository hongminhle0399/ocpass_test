import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import type { OrdersFeatureQuery as OrdersFeatureQueryType } from "./__generated__/OrdersFeatureQuery.graphql";
import { OrdersTable } from "./OrdersTable";
import { OrdersFilter } from "./OrdersFilter";


const ordersFeatureQuery = graphql`
  query OrdersFeatureQuery {
    ...OrdersTable_query
  }
`;

export const OrdersFeature = () => {
  const data = useLazyLoadQuery<OrdersFeatureQueryType>(ordersFeatureQuery, {});

  return (
    <div className="flex flex-col gap-y-4">
      <OrdersFilter />
      <OrdersTable orders={data} />
    </div>
  );
};
