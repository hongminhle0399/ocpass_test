import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import type { OrderEmployee_order$key } from "./__generated__/OrderEmployee_order.graphql";
import { DetailSection, DetailInfoRow } from "@/shared/ui";
import { Avatar } from "@heroui/react";

const orderEmployeeFragment = graphql`
  fragment OrderEmployee_order on Order {
    employee {
      firstName
      lastName
      title
      city
      country
      homePhone
    }
  }
`;

interface OrderEmployeeProps {
    order: OrderEmployee_order$key;
}

export const OrderEmployee = ({ order }: OrderEmployeeProps) => {
    const data = useFragment(orderEmployeeFragment, order);
    const emp = data.employee;

    if (!emp) {
        return null;
    }

    const fullName = [emp.firstName, emp.lastName].filter(Boolean).join(" ");

    return (
        <DetailSection title="Handled By">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                <Avatar name={fullName} size="md" className="shrink-0" color="secondary" />
                <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                        {fullName}
                    </p>
                    {emp.title && (
                        <p className="text-xs text-gray-400 dark:text-gray-500">{emp.title}</p>
                    )}
                </div>
            </div>
            <DetailInfoRow
                label="Location"
                value={[emp.city, emp.country].filter(Boolean).join(", ")}
            />
            <DetailInfoRow label="Phone" value={emp.homePhone} mono />
        </DetailSection>
    );
};
