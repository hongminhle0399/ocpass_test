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
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useOrdersContext } from "../hooks";
import type { OrderColumnItem, OrderColumnKey, OrderModel } from "../types";

const columns: OrderColumnItem = {
  id: "ID",
  orderDate: "Order Date",
  shippedDate: "Ship Name",
  customerContactName: "Contact Name",
  shipName: "Ship Name",
  shipAddress: "Ship Address",
  customerId: "Customer ID",
  employeeName: "Employee Name",
  shipCountry: "Ship Country",
};

export const OrdersTable = () => {
  const navigate = useNavigate();
  const { orders, hasNextPage, loading, onFetchMore } = useOrdersContext();
  const [initialLoading, setIsInialLoading] = useState<boolean>(true);

  useEffect(() => {
    if (orders) {
      setIsInialLoading(false);
    }
  }, [orders]);

  const handleRowClick = (to: string) => () => {
    navigate(to);
  };

  const renderCell = useCallback(
    (columnKey: OrderColumnKey, item: OrderModel) => {
      switch (columnKey) {
        case "id":
          const id = item[columnKey];
          return (
            <div className="font-semibold text-blue-500">
              <p>{id}</p>
            </div>
          );
        case "customerPhone":
          return null;
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
        {typedKeys(columns)
          .filter((item) => item !== "customerPhone")
          .map((key) => {
            return <TableColumn key={key}>{columns[key]}</TableColumn>;
          })}
      </TableHeader>
    );
  }, [columns]);

  return (
    <Table
      isHeaderSticky
      color="primary"
      fullWidth
      selectionMode="single"
      aria-label="Table with orders data"
      bottomContent={
        hasNextPage && !initialLoading ? (
          <div className="flex w-full justify-center py-4">
            <Button isDisabled={loading} variant="flat" onPress={onFetchMore}>
              {loading && <Spinner color="white" size="sm" />}
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
        isLoading={initialLoading}
        items={orders || []}
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
