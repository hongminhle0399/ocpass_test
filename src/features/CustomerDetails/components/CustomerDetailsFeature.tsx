import { graphql, usePreloadedQuery } from "react-relay";
import type { PreloadedQuery } from "react-relay";
import { CustomerProfileHero } from "./CustomerProfileHero";
import { CustomerContactCard } from "./CustomerContactCard";
import { CustomerOrdersTable } from "./CustomerOrdersTable";
import type { CustomerDetailsFeatureQuery as CustomerDetailsFeatureQueryType } from "./__generated__/CustomerDetailsFeatureQuery.graphql";
import { PrefetchRegistry } from "@/shared/lib/PrefetchRegistry";

export const customerDetailsFeatureQuery = graphql`
  query CustomerDetailsFeatureQuery($id: ID!) {
    node(id: $id) {
      ... on Customer {
        ...CustomerProfileHero_customer
        ...CustomerContactCard_customer
        ...CustomerOrdersTable_customer
      }
    }
  }
`;

export const customerPrefetchRegistry = new PrefetchRegistry<CustomerDetailsFeatureQueryType>(
    customerDetailsFeatureQuery
);

interface CustomerDetailsFeatureProps {
    queryRef: PreloadedQuery<CustomerDetailsFeatureQueryType>;
}

export const CustomerDetailsFeature = ({ queryRef }: CustomerDetailsFeatureProps) => {
    const data = usePreloadedQuery(customerDetailsFeatureQuery, queryRef);

    const customer = data.node;

    if (!customer) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400 dark:text-gray-500 gap-3">
                <p className="text-5xl">🏢</p>
                <p className="text-lg font-medium">Customer not found</p>
            </div>
        );
    }

    return (
        <div className="w-full mx-auto">
            <CustomerProfileHero customer={customer} />

            <div className="mb-6">
                <CustomerContactCard customer={customer} />
            </div>

            <CustomerOrdersTable customer={customer} />
        </div>
    );
};
