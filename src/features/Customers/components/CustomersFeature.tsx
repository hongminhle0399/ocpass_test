import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { CustomersTable } from "./CustomersTable";
import { CustomersFilter } from "./CustomersFilter";
import type { CustomersFeatureQuery as CustomersFeatureQueryType } from "./__generated__/CustomersFeatureQuery.graphql";

const customersFeatureQuery = graphql`
  query CustomersFeatureQuery {
    ...CustomersTable_query
  }
`;

export const CustomersFeature = () => {
  const data = useLazyLoadQuery<CustomersFeatureQueryType>(
    customersFeatureQuery,
    {},
  );

  return (
    <div className="flex flex-col gap-y-4">
      <CustomersFilter />
      <CustomersTable customers={data} />
    </div>
  );
};
