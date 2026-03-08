import { getOrLoadOrderDetailsQuery } from "@/features/OrderDetails/components/OrderDetailsFeature";
import { typedKeys } from "@/shared/types/utils";
import { TablePagination } from "@/shared/ui";
import { Avatar, Chip, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { useEffect, useMemo, useRef, useTransition } from "react";
import { graphql, useRefetchableFragment, useRelayEnvironment } from "react-relay";
import { useNavigate } from "react-router";
import { ORDERS_COLUMNS } from "../../constants";
import { useOrdersStore } from "../../store";
import type { OrdersTable_query$key } from "./__generated__/OrdersTable_query.graphql";

const ordersTableFragment = graphql`
  fragment OrdersTable_query on Query
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 10 }
  )
  @refetchable(queryName: "OrdersFeatureRefetchQuery") {
    orders(first: $count, after: $cursor) {
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
          shipVia
          shipRegion
          shipCountry
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`;

interface OrdersTableProps {
  orders: OrdersTable_query$key;
}

export const OrdersTable = ({ orders }: OrdersTableProps) => {
  const [data, refetch] = useRefetchableFragment(ordersTableFragment, orders);

  const takeNumber = useOrdersStore((state) => state.takeNumber);
  const environment = useRelayEnvironment();

  const [isPending, setTransition] = useTransition()
  const currentCursor = useRef<string | undefined | null>(undefined)

  useEffect(() => {
  }, [data.orders?.pageInfo])

  const toNextPage = () => {
    setTransition(() => {
      refetch({ count: Number(takeNumber), cursor: data?.orders?.pageInfo?.endCursor }, {
        fetchPolicy: 'store-or-network'
      })
      currentCursor.current = data.orders?.pageInfo?.endCursor
    })
  };

  const toPreviousPage = () => {
    setTransition(() => {
      refetch({ count: Number(takeNumber), cursor: data?.orders?.pageInfo?.startCursor }, {
        fetchPolicy: 'store-or-network'
      })
      currentCursor.current = data.orders?.pageInfo?.startCursor
    })
  };

  useEffect(() => {
    setTransition(() => {
      refetch({ count: Number(takeNumber), cursor: currentCursor.current }, {
        fetchPolicy: 'store-or-network'
      })
    })
  }, [takeNumber])

  const hasNext = !!data.orders?.pageInfo.hasNextPage
  const hasPrevious = !!data.orders?.pageInfo.hasPreviousPage
  const ordersList = useMemo(
    () => isPending ? [] : data.orders?.edges || undefined,
    [data.orders?.edges, isPending],
  );

  const navigate = useNavigate();

  const handleMouseEnter = (id: string) => () => {
    getOrLoadOrderDetailsQuery(environment, id);
  };

  const handleRowClick = (id: string) => () => {
    navigate(`/orders/${id}`);
  };

  return (
    <Table
      isHeaderSticky
      color="primary"
      fullWidth
      aria-label="Table with orders data"
      bottomContentPlacement="outside"
      classNames={{
        base: "flex flex-col flex-1 min-h-0",
        wrapper: "flex-1 overflow-y-auto",
        table: "h-full",
        tr: "hover:bg-default-100 transition-colors",
        td: "whitespace-nowrap overflow-hidden text-ellipsis max-w-60 py-3",
      }}
      bottomContent={
        <TablePagination
          isLoading={isPending}
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
        isLoading={isPending}
        items={ordersList}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => {
          const node = item.node;
          return (
            <TableRow
              key={node.id}
              onClick={handleRowClick(node.id)}
              onMouseEnter={handleMouseEnter(node.id)}
              onPointerDown={handleMouseEnter(node.id)}
              className="cursor-pointer"
            >
              <TableCell>
                <Chip size="sm" variant="flat" color="primary" className="font-mono font-bold">
                  #{node.id}
                </Chip>
              </TableCell>
              <TableCell>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {node.orderDate}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex gap-x-2 items-center">
                  <Avatar
                    name={node.customer?.contactName || ""}
                    size="sm"
                    isBordered
                    className="w-8 h-8 text-tiny"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
                      {node.customer?.contactName || "Unknown"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {node.customer?.phone}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Chip size="sm" variant="flat" color="warning" className="font-semibold">
                  Carrier #{node.shipVia}
                </Chip>
              </TableCell>
              <TableCell>
                <span className="text-sm italic text-gray-400">
                  {node.shipRegion || "—"}
                </span>
              </TableCell>
              <TableCell>
                <Chip size="sm" variant="dot" color="primary" className="border-none font-medium">
                  {node.shipCountry}
                </Chip>
              </TableCell>
              <TableCell>
                <span className="text-sm font-semibold truncate block max-w-[200px]">
                  {node.shipName}
                </span>
              </TableCell>
              <TableCell>
                <span className="text-xs text-gray-500 truncate block max-w-[250px]">
                  {node.shipAddress}
                </span>
              </TableCell>
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
};
