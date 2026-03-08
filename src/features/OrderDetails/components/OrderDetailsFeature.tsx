import { graphql, loadQuery, usePreloadedQuery } from "react-relay";
import type { Environment, PreloadedQuery } from "react-relay";
import { OrderDetailHero } from "./OrderDetailHero";
import { OrderShippingInfo } from "./OrderShippingInfo";
import { OrderItemsTable } from "./OrderItemsTable";
import { OrderEmployee } from "./OrderEmployee";
import type { OrderDetailsFeatureQuery as OrderDetailsFeatureQueryType } from "./__generated__/OrderDetailsFeatureQuery.graphql";

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

const MAX_CACHE_SIZE = 20;
const registry = new Map<string, PreloadedQuery<OrderDetailsFeatureQueryType>>();
const accessQueue: string[] = [];

export const getOrLoadOrderDetailsQuery = (environment: Environment, id: string) => {
    // If already in registry, move to end of access queue
    if (registry.has(id)) {
        const index = accessQueue.indexOf(id);
        if (index > -1) accessQueue.splice(index, 1);
        accessQueue.push(id);
        return registry.get(id)!;
    }

    // Load new query
    const queryRef = loadQuery<OrderDetailsFeatureQueryType>(environment, orderDetailsFeatureQuery, { id });

    // Evict oldest if limit reached
    if (accessQueue.length >= MAX_CACHE_SIZE) {
        const oldestId = accessQueue.shift();
        if (oldestId) {
            const oldestRef = registry.get(oldestId);
            oldestRef?.dispose();
            registry.delete(oldestId);
        }
    }

    registry.set(id, queryRef);
    accessQueue.push(id);

    return queryRef;
};

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
