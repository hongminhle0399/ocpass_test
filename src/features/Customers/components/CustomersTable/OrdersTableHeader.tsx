import { typedKeys } from "@/shared/types/utils";
import { TableColumn, TableHeader } from "@heroui/react";
import { useMemo } from "react";
import { ORDERS_COLUMNS } from "../../constants";

export const OrdersTableHeader = () => {
  const tableHeader = useMemo(() => {
    return (
      <TableHeader>
        {typedKeys(ORDERS_COLUMNS).map((key) => {
          return <TableColumn key={key}>{ORDERS_COLUMNS[key]}</TableColumn>;
        })}
      </TableHeader>
    );
  }, []);
  return tableHeader
};
