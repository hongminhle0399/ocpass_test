import { typedKeys } from "@/shared/types/utils";
import { Loading, TablePagination } from "@/shared/ui";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { useMemo, useRef, useTransition } from "react";
import { graphql, useRefetchableFragment } from "react-relay";
import { ORDERS_COLUMNS } from "../../constants";
import { useCustomersStore } from "../../store";
import { CustomersTableRow } from "./CustomersTableRow";
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
          return <TableRow key={node.id} onClick={handleRowClick(node.id)}>
            <TableCell>
              <div className="font-semibold text-blue-500">
                <p>{node.id}</p>
              </div>
            </TableCell>
            <TableCell>{node.contactName}</TableCell>
            <TableCell>{node.companyName}</TableCell>
            <TableCell>{node.fax}</TableCell>
            <TableCell>{node.country}</TableCell>
          </TableRow>
        }}
      </TableBody>
    </Table>
  );
};
