import type { GetOrdersQuery } from "@/graphql/__generated__/graphql";
import {
  Button,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@heroui/react";
import { useOrders } from "../hooks";
import { typedKeys } from "@/shared/types/utils";
import { useEffect, useState } from "react";

type Order = NonNullable<
  NonNullable<GetOrdersQuery["orders"]>["nodes"]
>[number];

type ColumnKey = keyof Omit<Order, "__typename">;

const columns: Record<ColumnKey, string> = {
  id: "Id",
  shipName: "Ship Name",
  shipAddress: "Ship Address",
};

export const OrderTable = () => {
  const { data, handleFetchMore, loading, hasNextPage } = useOrders({
    first: 50,
  });
  const [initialLoading, setIsInialLoading] = useState<boolean>(true);

  const orders: Order[] =
    data?.orders?.nodes?.filter((o): o is Order => o != null) ?? [];

  useEffect(() => {
    if (data) {
      setIsInialLoading(false);
    }
  }, [data]);

  return (
    <Table
      isHeaderSticky
      color={'primary'}
      selectionMode="single"
      aria-label="Table with orders data"
      bottomContent={
        hasNextPage && !initialLoading ? (
          <div className="flex w-full justify-center">
            <Button
              isDisabled={loading}
              variant="flat"
              onPress={handleFetchMore}
            >
              {loading && <Spinner color="white" size="sm" />}
              Load More
            </Button>
          </div>
        ) : null
      }
      classNames={{
        base: "max-h-[520px] overflow-scroll",
        table: "min-h-[420px]",
      }}
    >
      <TableHeader>
        {typedKeys(columns).map((key: ColumnKey) => {
          return <TableColumn key={key}>{columns[key]}</TableColumn>;
        })}
      </TableHeader>
      <TableBody
        isLoading={initialLoading}
        items={orders}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
