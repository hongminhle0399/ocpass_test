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
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useOrdersContext } from "../hooks";
import type { ColumnItem, ColumnKey, Order } from "../types";


const columns: ColumnItem<ColumnKey<Order>> = {
  id: "ID",
  orderDate: "Order Date",
  shippedDate: "Ship Name",
  customer: "Customer",
  shipName: "Ship Name",
  shipAddress: "Ship Address",
  customerId: "Customer ID",
  employee: "Employee",
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

  const renderCell = useCallback((columnKey: ColumnKey<Order>, item: Order) => {
    switch (columnKey) {
      case "id":
        return (
          <div className="font-semibold text-blue-500">
            <p>{item[columnKey]}</p>
          </div>
        );
      // case "shipAddress":
      // case "shipCountry":
      // case "orderDate":
      // case "shipName":
      // case "shippedDate":
      //   return <p>item[columnKey]</p>
      case "customer":
        const customer = item[columnKey];
        return (
          <div className="flex gap-x-2">
            <Avatar name={customer?.contactName || ""} />
            <div className="flex flex-col">
              <p className="text-md whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="font-bold">{customer?.contactName}</span>
              </p>
              <p className="whitespace-nowrap overflow-hidden text-ellipsis text-gray-500">
                {customer?.phone}
              </p>
            </div>
          </div>
        );
      case "employee":
        const employee = item[columnKey];
        return (
          <div className="flex gap-x-1">
            <p className="font-bold">{employee?.firstName}</p>
            <p className="text-gray-400">{employee?.lastName}</p>
          </div>
        );
      default:
        return item[columnKey];
    }
  }, []);

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
      <TableHeader>
        {typedKeys(columns).map((key) => {
          return <TableColumn key={key}>{columns[key]}</TableColumn>;
        })}
      </TableHeader>
      <TableBody
        isLoading={initialLoading}
        items={orders}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => {
          return (
            <TableRow key={item.id} onClick={handleRowClick(item.id)}>
              {(columnKey) => {
                return (
                  <TableCell>
                    {renderCell(columnKey as ColumnKey<Order>, item)}
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
