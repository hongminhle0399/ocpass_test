import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import type { CustomerDetailFeatureQuery as CustomerDetailFeatureQueryType } from "./__generated__/CustomerDetailFeatureQuery.graphql";
import { CustomerProfileHero } from "./CustomerProfileHero";
import { CustomerContactCard } from "./CustomerContactCard";
import { CustomerOrdersTable } from "./CustomerOrdersTable";

const customerDetailFeatureQuery = graphql`
  query CustomerDetailFeatureQuery($id: ID!) {
    node(id: $id) {
      ... on Customer {
        ...CustomerProfileHero_customer
        ...CustomerContactCard_customer
        ...CustomerOrdersTable_customer
      }
    }
  }
`;

interface CustomerDetailFeatureProps {
    customerId: string;
}

export const CustomerDetailFeature = ({ customerId }: CustomerDetailFeatureProps) => {
    const data = useLazyLoadQuery<CustomerDetailFeatureQueryType>(
        customerDetailFeatureQuery,
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
        <div className="max-w-5xl mx-auto">
            <CustomerProfileHero customer={customer} />

            <div className="mb-6">
                <CustomerContactCard customer={customer} />
            </div>

            <CustomerOrdersTable customer={customer} />
        </div>
    );
};
