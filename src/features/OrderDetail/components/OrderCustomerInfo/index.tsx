import { graphql, useFragment } from "react-relay";
import type { OrderCustomerInfo_order$key } from "./__generated__/OrderCustomerInfo_order.graphql";
import { DetailSection, DetailInfoRow } from "@/shared/ui";
import { Avatar } from "@heroui/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";

const orderCustomerInfoFragment = graphql`
  fragment OrderCustomerInfo_order on Order {
    customerId
    customer {
      id
      companyName
      contactName
      contactTitle
      phone
      city
      country
    }
  }
`;

interface OrderCustomerInfoProps {
    order: OrderCustomerInfo_order$key;
}

export const OrderCustomerInfo = ({ order }: OrderCustomerInfoProps) => {
    const data = useFragment(orderCustomerInfoFragment, order);
    const customer = data.customer;

    if (!customer) {
        return (
            <DetailSection title="Customer">
                <p className="text-sm text-gray-400 dark:text-gray-500 italic">
                    No customer linked (ID: {data.customerId ?? "—"})
                </p>
            </DetailSection>
        );
    }

    return (
        <DetailSection title="Customer">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                <Avatar
                    name={customer.contactName || customer.companyName}
                    size="md"
                    className="shrink-0"
                    color="primary"
                />
                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                        <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm truncate">
                            {customer.companyName}
                        </p>
                        <Link
                            to={`/customers/${customer.id}`}
                            className="text-blue-400 hover:text-blue-600 transition-colors shrink-0"
                            title="View customer profile"
                        >
                            <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                    {customer.contactTitle && (
                        <p className="text-xs text-gray-400 dark:text-gray-500 truncate">
                            {customer.contactName} · {customer.contactTitle}
                        </p>
                    )}
                </div>
            </div>

            <DetailInfoRow label="Phone" value={customer.phone} mono />
            <DetailInfoRow
                label="Location"
                value={[customer.city, customer.country].filter(Boolean).join(", ")}
            />
        </DetailSection>
    );
};
