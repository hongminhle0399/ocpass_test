import { Spinner, Table, TableBody } from "@heroui/react";
import { useMemo } from "react";
import { graphql, usePaginationFragment } from "react-relay";
import { OrdersTableHeader } from "./OrdersTableHeader";
import { OrdersTableRow } from "./OrdersTableRow";
import type { OrdersTable_query$key } from "./__generated__/OrdersTable_query.graphql";
import type { OrdersFeatureRefetchQuery as OrdersFeatureRefetchQueryType } from "./__generated__/OrdersFeatureRefetchQuery.graphql";
import { useOrdersStore } from "../../store";
import { TablePagination } from "@/shared/ui";

const ordersTableFragment = graphql`
  fragment OrdersTable_query on Query
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 10 }
  )
  @refetchable(queryName: "OrdersFeatureRefetchQuery") {
    orders(first: $count, after: $cursor)
      @connection(key: "OrdersTable_orders") {
      edges {
        node {
          ...OrdersTableRow_order
        }
      }
    }
  }
`;

interface OrdersTableProps {
  orders: OrdersTable_query$key;
}

export const OrdersTable = ({ orders }: OrdersTableProps) => {
  const {
    data,
    isLoadingNext,
    isLoadingPrevious,
    hasNext,
    hasPrevious,
    loadNext,
    loadPrevious,
  } = usePaginationFragment<
    OrdersFeatureRefetchQueryType,
    OrdersTable_query$key
  >(ordersTableFragment, orders);

  const takeNumber = useOrdersStore((state) => state.takeNumber);

  const toNextPage = () => {
    loadNext(takeNumber);
  };

  const toPreviousPage = () => {
    loadPrevious(takeNumber);
  };

  const isLoading = isLoadingNext || isLoadingPrevious;
  const ordersList = useMemo(() => data.orders?.edges || [], [data.orders]);
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
          return <OrdersTableRow order={item.node} />;
        }}
      </TableBody>
    </Table>
  );
};
