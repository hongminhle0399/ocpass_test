import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { CustomersTable } from "./CustomersTable";
import { CustomersFilter } from "./CustomersFilter";
import type { CustomersFeatureQuery as CustomersFeatureQueryType } from "./__generated__/CustomersFeatureQuery.graphql";
import { Suspense } from "react";
import { Loading } from "@/shared/ui";

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
    <div className="flex flex-col gap-y-4 flex-1 min-h-0">
      <Suspense fallback={<Loading label="Loading customers..." />}>
        <CustomersFilter />
        <CustomersTable customers={data} />
      </Suspense>
    </div>
  );
};
