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
import { CUSTOMERS_COLUMN } from "../constants";
import { useCustomers } from "../hooks";
import type { OrderColumnKey, CustomerModel } from "../types";

export const CustomersTable = () => {
  const navigate = useNavigate();
  const { data, hasNextPage, loading, isFetchingNextPage, fetchNextPage } =
    useCustomers({});

  const handleRowClick = (to: string) => {
    navigate("/customers/" + to);
  };

  const fetchMoreOrders = () => {
    fetchNextPage();
  };

  const renderCell = useCallback(
    (columnKey: OrderColumnKey, item: CustomerModel) => {
      switch (columnKey) {
        case "id":
          return (
            <p className="text-blue-500 font-semibold">{item[columnKey]}</p>
          );
        case "city":
        case "contactTitle":
        case "country":
        case "postalCode":
          const columnValue = item[columnKey];
          return <p>{columnValue}</p>;
        case "contactName":
          return (
            <div className="flex gap-x-2 items-center">
              <Avatar name={item["contactName"] || ""} />
              <p className="text-md whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="font-bold">{item["contactName"]}</span>
              </p>
            </div>
          );
        case "companyName":
          return <p className="font-semibold">{item[columnKey]}</p>;
        case "phone":
          return <p className="text-blue-500">{item[columnKey]}</p>;
        default:
          return item[columnKey];
      }
    },
    [],
  );

  const tableHeader = useMemo(() => {
    return (
      <TableHeader>
        {typedKeys(CUSTOMERS_COLUMN).map((key) => {
          return <TableColumn key={key}>{CUSTOMERS_COLUMN[key]}</TableColumn>;
        })}
      </TableHeader>
    );
  }, []);

  return (
    <Table
      isHeaderSticky
      color="primary"
      fullWidth
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
            <TableRow className="hover:bg-gray-100 cursor-pointer" key={item.id} onClick={() => handleRowClick(item.id!)}>
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
