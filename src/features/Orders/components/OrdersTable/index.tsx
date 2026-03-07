import { Avatar, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { useMemo } from "react";
import { graphql, usePaginationFragment } from "react-relay";
import { useNavigate } from "react-router";
import { useOrdersStore } from "../../store";
import { TablePagination } from "@/shared/ui";
import { typedKeys } from "@/shared/types/utils";
import { ORDERS_COLUMNS } from "../../constants";
import type { OrdersTable_query$key } from "./__generated__/OrdersTable_query.graphql";
import type { OrdersFeatureRefetchQuery as OrdersFeatureRefetchQueryType } from "./__generated__/OrdersFeatureRefetchQuery.graphql";

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
          id
          shipName
          shipAddress
          customer {
            contactName
            phone
          }
          shippedDate
          orderDate
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
  const ordersList = useMemo(
    () => data.orders?.edges || undefined,
    [data.orders?.edges],
  );

  const navigate = useNavigate();

  return (
    <Table
      isHeaderSticky
      color="primary"
      fullWidth
      aria-label="Table with orders data"
      bottomContent={
        <TablePagination
          hasNext={hasNext}
          hasPrevious={hasPrevious}
          loadNext={toNextPage}
          loadPrevious={toPreviousPage}
        />
      }
    >
      <TableHeader>
        {typedKeys(ORDERS_COLUMNS).map((key) => {
          return <TableColumn key={key}>{ORDERS_COLUMNS[key]}</TableColumn>;
        })}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={ordersList}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => {
          const node = item.node;
          console.log(node);
          return (
            <TableRow key={node.id} onClick={() => navigate(`/orders/${node.id}`)}>
              <TableCell>
                <p>{node.id}</p>
              </TableCell>
              <TableCell>{node.orderDate}</TableCell>
              <TableCell>
                <div className="flex gap-x-2">
                  <Avatar name={node.customer?.contactName || ""} />
                  <div className="flex flex-col">
                    <p className="text-md whitespace-nowrap overflow-hidden text-ellipsis">
                      <span className="font-bold">
                        {node.customer?.contactName || ""}
                      </span>
                    </p>
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis text-gray-500">
                      {node.customer?.phone}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{node.shipName}</TableCell>
              <TableCell>{node.shipAddress}</TableCell>
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
};
