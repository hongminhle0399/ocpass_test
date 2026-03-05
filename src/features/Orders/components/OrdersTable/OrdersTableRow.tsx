import { Avatar, TableCell, TableRow } from "@heroui/react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import type { OrdersTableRow_order$key } from "./__generated__/OrdersTableRow_order.graphql";
import { useNavigate } from "react-router";

const ordersTableRowFragment = graphql`
  fragment OrdersTableRow_order on Order {
    id
    shipName
    shipAddress
    customer {
      contactName
      phone
    }
    freight
    shippedDate
    orderDate
  }
`;

interface OrdersTableRowProps {
  order: OrdersTableRow_order$key;
}

export const OrdersTableRow = ({ order }: OrdersTableRowProps) => {
  const data = useFragment(ordersTableRowFragment, order);
  const navigate = useNavigate();

  const onRowClick = () => {
    navigate(data.id);
  };

  return (
    <TableRow onClick={onRowClick}>
      <TableCell>
        <div className="font-semibold text-blue-500">
          <p>{data.id}</p>
        </div>
      </TableCell>
      <TableCell>{data.orderDate}</TableCell>
      <TableCell>
        <div className="flex gap-x-2">
          <Avatar name={data.customer?.contactName || ""} />
          <div className="flex flex-col">
            <p className="text-md whitespace-nowrap overflow-hidden text-ellipsis">
              <span className="font-bold">
                {data.customer?.contactName || ""}
              </span>
            </p>
            <p className="whitespace-nowrap overflow-hidden text-ellipsis text-gray-500">
              {data.customer?.phone}
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell>{data.shipAddress}</TableCell>
      <TableCell>{data.freight}</TableCell>
    </TableRow>
  );
};
