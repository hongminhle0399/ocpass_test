import { typedKeys } from "@/shared/types/utils";
import { Loading, TablePagination } from "@/shared/ui";
import { Avatar, Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { useMemo, useRef, useTransition } from "react";
import { graphql, useRefetchableFragment } from "react-relay";
import { ORDERS_COLUMNS } from "../../constants";
import { useCustomersStore } from "../../store";
import type { CustomersTable_query$key } from "./__generated__/CustomersTable_query.graphql";
import { useNavigate } from "react-router";

const custmersTableFragment = graphql`
  fragment CustomersTable_query on Query
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 10 }
  )
  @refetchable(queryName: "CustomersFeatureRefetchQuery") {
    customers(first: $count, after: $cursor) {
      edges {
        node {
          id
          contactName
          city
          fax
          companyName
          country
          orders {
            id
            orderDate
            shipper {
              companyName
            }
            freight
          }
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

interface CustomersTableProps {
  customers: CustomersTable_query$key;
}

export const CustomersTable = ({ customers }: CustomersTableProps) => {
  const [data, refetch] = useRefetchableFragment(custmersTableFragment, customers);
  const [isPending, setTransition] = useTransition()
  const currentCursor = useRef<string | null | undefined>(undefined)

  const navigate = useNavigate();
  const takeNumber = useCustomersStore((state) => state.takeNumber);

  const toNextPage = () => {
    setTransition(() => {
      refetch({ cursor: data?.customers?.pageInfo?.endCursor, count: Number(takeNumber) })
    })
    currentCursor.current = data?.customers?.pageInfo?.endCursor
  };

  const toPreviousPage = () => {
    setTransition(() => {
      refetch({ cursor: data?.customers?.pageInfo?.startCursor, count: Number(takeNumber) })
    })
    currentCursor.current = data?.customers?.pageInfo?.startCursor
  };

  const handleRowClick = (id: string) => () => {
    navigate(`/customers/${id}`);
  };

  const hasNext = !!data?.customers?.pageInfo?.hasNextPage
  const hasPrevious = !!data?.customers?.pageInfo?.hasPreviousPage
  const customersList = useMemo(() => isPending ? [] : data.customers?.edges || [], [data.customers?.edges, isPending]);
  return (
    <Table
      isHeaderSticky
      color="primary"
      fullWidth
      aria-label="Table with orders data"
      bottomContentPlacement="outside"
      classNames={{
        base: "flex-1 overflow-scroll",
        table: "h-full",
        wrapper: "flex-1",
        tr: "hover:bg-default-100 transition-colors",
        td: "whitespace-nowrap overflow-hidden text-ellipsis max-w-60",
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
        items={customersList}
        loadingContent={<Loading label="Loading..." />}
      >
        {(item) => {
          const node = item.node
          return (
            <TableRow key={node.id} onClick={handleRowClick(node.id)} className="cursor-pointer">
              <TableCell>
                <Chip size="sm" variant="flat" color="default" className="font-mono">
                  {node.id}
                </Chip>
              </TableCell>
              <TableCell>
                <div className="flex gap-x-2 items-center">
                  <Avatar
                    name={node.contactName || ""}
                    size="sm"
                    isBordered
                    color="primary"
                    className="w-8 h-8 text-tiny"
                  />
                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    {node.contactName}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  {node.companyName}
                </span>
              </TableCell>
              <TableCell>
                <span className="text-gray-500 text-sm italic">
                  {node.fax || "N/A"}
                </span>
              </TableCell>
              <TableCell>
                <Chip size="sm" variant="dot" color="success">
                  {node.country}
                </Chip>
              </TableCell>
              <TableCell>
                <Chip size="sm" variant="solid" color="secondary" className="font-bold">
                  {node.orders?.length || 0}
                </Chip>
              </TableCell>
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
};
