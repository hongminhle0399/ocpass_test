import { loadQuery } from "react-relay";
import type { Environment, PreloadedQuery } from "react-relay";
import { orderDetailFeatureQuery } from "./components/OrderDetailsFeature";
import type { OrderDetailFeatureQuery as OrderDetailFeatureQueryType } from "./components/__generated__/OrderDetailFeatureQuery.graphql";

const preloadedQueries = new Map<string, PreloadedQuery<OrderDetailFeatureQueryType>>();

export const preloadOrderDetail = (environment: Environment, id: string) => {
    if (!preloadedQueries.has(id)) {
        const queryRef = loadQuery<OrderDetailFeatureQueryType>(
            environment,
            orderDetailFeatureQuery,
            { id }
        );
        preloadedQueries.set(id, queryRef);
    }
    return preloadedQueries.get(id);
};

export const getPreloadedOrderDetail = (id: string) => {
    return preloadedQueries.get(id);
};

export const clearPreloadedOrderDetail = (id: string) => {
    const ref = preloadedQueries.get(id);
    if (ref) {
        ref.dispose();
        preloadedQueries.delete(id);
    }
};
