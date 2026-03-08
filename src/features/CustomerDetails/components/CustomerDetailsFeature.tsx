import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import type { CustomerDetailsFeatureQuery as CustomerDetailsFeatureQueryType } from "./__generated__/CustomerDetailsFeatureQuery.graphql";
import { CustomerProfileHero } from "./CustomerProfileHero";
import { CustomerContactCard } from "./CustomerContactCard";
import { CustomerOrdersTable } from "./CustomerOrdersTable";

const customerDetailsFeatureQuery = graphql`
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

interface CustomerDetailsFeatureProps {
    customerId: string;
}

export const CustomerDetailsFeature = ({ customerId }: CustomerDetailsFeatureProps) => {
    const data = useLazyLoadQuery<CustomerDetailsFeatureQueryType>(
        customerDetailsFeatureQuery,
        { id: customerId },
    );

    const customer = data.node;

    if (!customer) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400 dark:text-gray-500 gap-3">
                <p className="text-5xl">🏢</p>
                <p className="text-lg font-medium">Customer not found</p>
                <p className="text-sm">No customer with ID: {customerId}</p>
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
