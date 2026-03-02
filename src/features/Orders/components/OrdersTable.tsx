import { typedKeys } from "@/shared/types/utils";
import {
  Avatar,
  Button,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router";
import { COMPOSABLE_COLLUMS, ORDERS_COLUMNS } from "../constants";
import { useOrders } from "../hooks";
import type { OrderColumnKey, OrderModel } from "../types";

export const OrdersTable = () => {
  const navigate = useNavigate();
  const { data, hasNextPage, loading, isFetchingNextPage, fetchNextPage } =
    useOrders({});

  const handleRowClick = (to: string) => () => {
    navigate(to);
  };

  const fetchMoreOrders = () => {
    fetchNextPage();
  };

  const renderCell = useCallback(
    (columnKey: OrderColumnKey, item: OrderModel) => {
      if (COMPOSABLE_COLLUMS.includes(columnKey)) {
        return null;
      }

      switch (columnKey) {
        case "id":
          const id = item[columnKey];
          return (
            <div className="font-semibold text-blue-500">
              <p>{id}</p>
            </div>
          );
        case "customerContactName":
          return (
            <div className="flex gap-x-2">
              <Avatar name={item["customerContactName"] || ""} />
              <div className="flex flex-col">
                <p className="text-md whitespace-nowrap overflow-hidden text-ellipsis">
                  <span className="font-bold">
                    {item["customerContactName"]}
                  </span>
                </p>
                <p className="whitespace-nowrap overflow-hidden text-ellipsis text-gray-500">
                  {item["customerPhone"]}
                </p>
              </div>
            </div>
          );
        case "employeeName":
          const employeeName = item[columnKey]?.split("\s+");
          return (
            <div className="flex gap-x-1">
              <p className="font-bold">{employeeName?.[0]}</p>
              <p className="text-gray-400">{employeeName?.[1]}</p>
            </div>
          );
        default:
          return item[columnKey];
      }
    },
    [],
  );

  const tableHeader = useMemo(() => {
    return (
      <TableHeader>
        {typedKeys(ORDERS_COLUMNS)
          .filter((key) => !COMPOSABLE_COLLUMS.includes(key))
          .map((key) => {
            return <TableColumn key={key}>{ORDERS_COLUMNS[key]}</TableColumn>;
          })}
      </TableHeader>
    );
  }, []);

  return (
    <Table
      isHeaderSticky
      color="primary"
      fullWidth
      selectionMode="single"
      aria-label="Table with orders data"
      bottomContent={
        hasNextPage && data ? (
          <div className="flex w-full justify-center py-4">
            <Button
              isDisabled={isFetchingNextPage}
              variant="flat"
              onPress={fetchMoreOrders}
            >
              {isFetchingNextPage && <Spinner color="white" size="sm" />}
              Load More
            </Button>
          </div>
        ) : null
      }
      classNames={{
        base: "max-h-[520px] overflow-scroll",
        table: "min-h-[420px]",
        td: "whitespace-nowrap overflow-hidden text-ellipsis max-w-60",
      }}
    >
      {tableHeader}
      <TableBody
        isLoading={loading}
        items={data || []}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => {
          return (
            <TableRow key={item.id} onClick={handleRowClick(item.id!)}>
              {(columnKey) => {
                return (
                  <TableCell>
                    {renderCell(columnKey as OrderColumnKey, item)}
                  </TableCell>
                );
              }}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
};
