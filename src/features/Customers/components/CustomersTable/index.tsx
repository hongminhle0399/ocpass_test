import { typedKeys } from "@/shared/types/utils";
import { Loading, TablePagination } from "@/shared/ui";
import { Avatar, Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, type SortDescriptor, Button, Tooltip, type PressEvent } from "@heroui/react";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { graphql, useRefetchableFragment, useRelayEnvironment } from "react-relay";
import { ORDERS_COLUMNS } from "../../constants";
import { useCustomersStore } from "../../store";
import type { CustomersTable_query$key } from "./__generated__/CustomersTable_query.graphql";
import { useNavigate } from "react-router";
import { customerPrefetchRegistry } from "@/features/CustomerDetails/components/CustomerDetailsFeature";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

const custmersTableFragment = graphql`
  fragment CustomersTable_query on Query
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 10 }
    order: { type: "[CustomerSortInput!]" }
    customerId: { type: "String" }
    contactName: { type: "String" }
    companyName: { type: "String" }
  )
  @refetchable(queryName: "CustomersFeatureRefetchQuery") {
    customers(first: $count, after: $cursor, order: $order, 
      where: { 
        and: [
          {customerId: { contains: $customerId }}, 
          {contactName: { contains: $contactName }},
          {companyName: { contains: $companyName }}
        ]
      }  
    ) {
      edges {
        node {
          id
          contactName
          city
          fax
          companyName
          country
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
  const [isPending, setTransition] = useTransition();
  const currentCursor = useRef<string | null | undefined>(undefined);

  const navigate = useNavigate();
  const takeNumber = useCustomersStore((state) => state.takeNumber);
  const customersFilter = useCustomersStore(state => state.customersFilter)
  const environment = useRelayEnvironment();
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "id",
    direction: "ascending",
  });

  const sortOrder = useMemo(() => {
    if (!sortDescriptor.column || !sortDescriptor.direction) return null;
    const direction = sortDescriptor.direction === "ascending" ? "ASC" : "DESC";

    switch (sortDescriptor.column) {
      case "id": return [{ customerId: direction }];
      case "company": return [{ companyName: direction }];
      case "contactName": return [{ contactName: direction }];
      case "fax": return [{ fax: direction }];
      case "country": return [{ country: direction }];
      default: return null;
    }
  }, [sortDescriptor]);

  const getRefetchParams = () => {
    return {
      cursor: currentCursor.current,
      count: Number(takeNumber),
      order: sortOrder,
      customerId: customersFilter.id || '',
      contactName: customersFilter.contactName || '',
      companyName: customersFilter.company || ''
    }
  }

  const toNextPage = () => {
    setTransition(() => {
      refetch(getRefetchParams())
    })
    currentCursor.current = data?.customers?.pageInfo?.endCursor;
  };

  const toPreviousPage = () => {
    setTransition(() => {
      refetch(getRefetchParams());
    });
    currentCursor.current = data?.customers?.pageInfo?.startCursor;
  };

  useEffect(() => {
    setTransition(() => {
      refetch(getRefetchParams())
    })
  }, [takeNumber, refetch, sortOrder, customersFilter]);

  const handleMouseEnter = (id: string) => () => {
    if (id !== activeHoverId) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      customerPrefetchRegistry.getOrLoad(environment, id);
    }, 150);
    setActiveHoverId(id);
  };

  const handleRowClick = (id: string) => () => {
    navigate(`/customers/${id}`);
  };

  const handleCopy = (text: string | undefined | null) => (e: PressEvent) => {
    if (text) {
      window.navigator.clipboard.writeText(text)
    }
  }

  const hasNext = !!data?.customers?.pageInfo?.hasNextPage;
  const hasPrevious = !!data?.customers?.pageInfo?.hasPreviousPage;

  const customersList = useMemo(() => isPending ? [] : data.customers?.edges || [], [data.customers?.edges, isPending]);

  const renderCopyButton = (text: string | null | undefined, label: string) => (
    <Tooltip content={`Copy ${label}`} closeDelay={0}>
      <Button
        isIconOnly
        size="sm"
        variant="light"
        radius="full"
        onPress={handleCopy(text)}
        className="text-default-400 hover:text-primary transition-colors h-7 w-7 min-w-7 opacity-0 group-hover:opacity-100"
      >
        <ClipboardDocumentIcon className="w-3.5 h-3.5" />
      </Button>
    </Tooltip>
  );

  return (
    <Table
      isHeaderSticky
      color="primary"
      fullWidth
      aria-label="Table with customers data"
      bottomContentPlacement="outside"
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
      classNames={{
        base: "flex-1 min-h-[400px] overflow-scroll",
        table: "h-full min-w-full",
        wrapper: "flex-1 h-full",
        tr: "hover:bg-default-100 transition-colors group",
        td: "whitespace-nowrap overflow-hidden text-ellipsis max-w-60 h-16 py-0",
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
          // Disable sorting for "totalOrders" as it is a virtual field
          const isSortable = key !== "totalOrders";
          return (
            <TableColumn key={key} allowsSorting={isSortable}>
              {ORDERS_COLUMNS[key]}
            </TableColumn>
          );
        })}
      </TableHeader>
      <TableBody
        emptyContent={
          <div className="flex flex-col items-center justify-center h-64 text-default-400">
            No rows to display.
          </div>
        }
        isLoading={isPending}
        items={customersList}
        loadingContent={<Loading label="Loading..." />}
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
                <div className="flex items-center gap-x-1">
                  <Chip size="sm" variant="flat" color="default" className="font-mono">
                    {node.id}
                  </Chip>
                  {renderCopyButton(node.id, "ID")}
                </div>
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
                  {renderCopyButton(node.contactName, "Contact Name")}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-x-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    {node.companyName}
                  </span>
                  {renderCopyButton(node.companyName, "Company")}
                </div>
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
                <Chip size="sm" variant="flat" color="default">
                  —
                </Chip>
              </TableCell>
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
};
