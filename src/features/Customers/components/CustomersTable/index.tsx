import { TablePagination } from "@/shared/ui";
import { Spinner, Table, TableBody } from "@heroui/react";
import { useMemo } from "react";
import { graphql, usePaginationFragment } from "react-relay";
import { useOrdersStore } from "../../store";
import { CustomersTableRow } from "./CustomersTableRow";
import { OrdersTableHeader } from "./OrdersTableHeader";
import type { CustomersTable_query$key } from "./__generated__/CustomersTable_query.graphql";
import type { CustomersFeatureRefetchQuery as CustomersFeatureRefetchQueryType } from "./__generated__/CustomersFeatureRefetchQuery.graphql";

const custmersTableFragment = graphql`
  fragment CustomersTable_query on Query
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 10 }
  )
  @refetchable(queryName: "CustomersFeatureRefetchQuery") {
    customers(first: $count, after: $cursor)
      @connection(key: "CustomersTable_customers") {
      edges {
        node {
          ...CustomersTableRow_customer
        }
      }
    }
  }
`;

interface CustomersTableProps {
  customers: CustomersTable_query$key;
}

export const CustomersTable = ({ customers }: CustomersTableProps) => {
  const {
    data,
    isLoadingNext,
    isLoadingPrevious,
    hasNext,
    hasPrevious,
    loadNext,
    loadPrevious,
  } = usePaginationFragment<
    CustomersFeatureRefetchQueryType,
    CustomersTable_query$key
  >(custmersTableFragment, customers);

  const takeNumber = useOrdersStore((state) => state.takeNumber);

  const toNextPage = () => {
    loadNext(takeNumber);
  };

  const toPreviousPage = () => {
    loadPrevious(takeNumber);
  };

  const isLoading = isLoadingNext || isLoadingPrevious;
  const ordersList = useMemo(() => data.customers?.edges || [], [data.customers]);
  return (
    <Table
      isHeaderSticky
      color="primary"
      fullWidth
      selectionMode="single"
      aria-label="Table with orders data"
      classNames={{
        base: "max-h-[520px] overflow-scroll",
        table: "min-h-[420px]",
        td: "whitespace-nowrap overflow-hidden text-ellipsis max-w-60",
      }}
      bottomContent={
        <TablePagination
          hasNext={hasNext}
          hasPrevious={hasPrevious}
          loadNext={toNextPage}
          loadPrevious={toPreviousPage}
        />
      }
    >
      <OrdersTableHeader />
      <TableBody
        isLoading={isLoading}
        items={ordersList}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => {
          return <CustomersTableRow customer={item.node} />;
        }}
      </TableBody>
    </Table>
  );
};
