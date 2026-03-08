import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import type { OrdersFeatureQuery as OrdersFeatureQueryType } from "./__generated__/OrdersFeatureQuery.graphql";
import { OrdersTable } from "./OrdersTable";
import { OrdersFilter } from "./OrdersFilter";
import { Suspense } from "react";
import { Loading } from "@/shared/ui";


const ordersFeatureQuery = graphql`
  query OrdersFeatureQuery {
    ...OrdersTable_query
  }
`;

export const OrdersFeature = () => {
  const data = useLazyLoadQuery<OrdersFeatureQueryType>(ordersFeatureQuery, {});

  return (
    <div className="flex flex-col gap-y-4 flex-1 min-h-0">
      <Suspense fallback={<Loading label="Loading orders..." />}>
        <OrdersFilter />
        <OrdersTable orders={data} />
      </Suspense>
    </div>
  );
};