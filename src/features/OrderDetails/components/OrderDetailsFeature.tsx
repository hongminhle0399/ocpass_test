import { graphql, usePreloadedQuery } from "react-relay";
import type { PreloadedQuery } from "react-relay";
import { OrderDetailHero } from "./OrderDetailHero";
import { OrderShippingInfo } from "./OrderShippingInfo";
import { OrderItemsTable } from "./OrderItemsTable";
import { OrderEmployee } from "./OrderEmployee";
import type { OrderDetailsFeatureQuery as OrderDetailsFeatureQueryType } from "./__generated__/OrderDetailsFeatureQuery.graphql";
import { PrefetchRegistry } from "@/shared/lib/PrefetchRegistry";

export const orderDetailsFeatureQuery = graphql`
  query OrderDetailsFeatureQuery($id: ID!) {
    node(id: $id) {
      ... on Order {
        ...OrderDetailHero_order
        ...OrderShippingInfo_order
        ...OrderItemsTable_order
        ...OrderEmployee_order
      }
    }
  }
`;

export const orderPrefetchRegistry = new PrefetchRegistry<OrderDetailsFeatureQueryType>(
    orderDetailsFeatureQuery
);

interface OrderDetailsFeatureProps {
    queryRef: PreloadedQuery<OrderDetailsFeatureQueryType>;
}

export const OrderDetailsFeature = ({ queryRef }: OrderDetailsFeatureProps) => {
    const data = usePreloadedQuery(orderDetailsFeatureQuery, queryRef);

    const order = data.node;

    if (!order) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400 dark:text-gray-500 gap-3">
                <p className="text-lg font-medium">Order not found</p>
            </div>
        );
    }

    return (
        <div className="w-full mx-auto">
            <OrderDetailHero order={order} />

            <div className="grid grid-cols-1 gap-4 mb-4">
                <OrderEmployee order={order} />
                <div className="space-y-4">
                    <OrderShippingInfo order={order} />
                </div>
            </div>

            <OrderItemsTable order={order} />
        </div>
    );
};
