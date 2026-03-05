import { TableCell, TableRow } from "@heroui/react";
import { useFragment } from "react-relay";
import { useNavigate } from "react-router";
import { graphql } from "relay-runtime";
import type { CustomersTableRow_customer$key } from "./__generated__/CustomersTableRow_customer.graphql";

const customersTableRowFragment = graphql`
  fragment CustomersTableRow_customer on Customer {
    id
    contactName
    city
    fax
    companyName
    country
  }
`;

interface CustomersTableRowProps {
  customer: CustomersTableRow_customer$key;
}

export const CustomersTableRow = ({ customer }: CustomersTableRowProps) => {
  const data = useFragment(customersTableRowFragment, customer);
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
      <TableCell>{data.contactName}</TableCell>
      <TableCell>{data.companyName}</TableCell>
      <TableCell>{data.fax}</TableCell>
      <TableCell>{data.country}</TableCell>
    </TableRow>
  );
};
