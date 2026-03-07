import { Chip } from "@heroui/react";
import { CalendarDaysIcon, TruckIcon } from "@heroicons/react/24/outline";
import { graphql, useFragment } from "react-relay";
import type { OrderDetailHero_order$key } from "./__generated__/OrderDetailHero_order.graphql";
import { BackButton } from "@/shared/ui";

const orderDetailHeroFragment = graphql`
  fragment OrderDetailHero_order on Order {
    id
    orderDate
    shippedDate
    requiredDate
    freight
    shipName
  }
`;

interface OrderDetailHeroProps {
    order: OrderDetailHero_order$key;
}

export const OrderDetailHero = ({ order }: OrderDetailHeroProps) => {
    const data = useFragment(orderDetailHeroFragment, order);

    const isShipped = !!data.shippedDate;
    const isOverdue =
        !isShipped &&
        data.requiredDate &&
        new Date(data.requiredDate) < new Date();

    return (
        <div className="mb-6">
            <BackButton label="Back to Orders" />

            <div className="mt-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                        <Chip
                            size="sm"
                            color={isShipped ? "success" : isOverdue ? "danger" : "warning"}
                            variant="flat"
                            startContent={<TruckIcon className="w-3 h-3" />}
                        >
                            {isShipped ? "Shipped" : isOverdue ? "Overdue" : "Pending"}
                        </Chip>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                        Order{" "}
                        <span className="font-mono text-blue-500">
                            #{data.id}
                        </span>
                    </h1>
                    {data.shipName && (
                        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
                            Destination: <span className="font-medium">{data.shipName}</span>
                        </p>
                    )}
                </div>

                <div className="flex flex-wrap gap-3 shrink-0">
                    {data.orderDate && (
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-xl px-4 py-2.5 shadow-sm border border-gray-100 dark:border-gray-700 text-sm">
                            <CalendarDaysIcon className="w-4 h-4 text-blue-400" />
                            <div>
                                <p className="text-xs text-gray-400 dark:text-gray-500">Order Date</p>
                                <p className="font-medium text-gray-800 dark:text-gray-200">
                                    {data.orderDate}
                                </p>
                            </div>
                        </div>
                    )}
                    {data.shippedDate && (
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-xl px-4 py-2.5 shadow-sm border border-gray-100 dark:border-gray-700 text-sm">
                            <TruckIcon className="w-4 h-4 text-green-400" />
                            <div>
                                <p className="text-xs text-gray-400 dark:text-gray-500">Shipped Date</p>
                                <p className="font-medium text-gray-800 dark:text-gray-200">
                                    {data.shippedDate}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
