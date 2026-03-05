import { graphql, useFragment } from "react-relay";
import type { CustomerOrdersTable_customer$key } from "./__generated__/CustomerOrdersTable_customer.graphql";
import { Chip } from "@heroui/react";
import { CalendarDaysIcon, TruckIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

const customerOrdersTableFragment = graphql`
  fragment CustomerOrdersTable_customer on Customer {
    orders {
      id
      orderDate
      shippedDate
      freight
      shipName
    }
  }
`;

interface CustomerOrdersTableProps {
    customer: CustomerOrdersTable_customer$key;
}

export const CustomerOrdersTable = ({ customer }: CustomerOrdersTableProps) => {
    const data = useFragment(customerOrdersTableFragment, customer);
    const navigate = useNavigate();

    const orders = data.orders ?? [];

    if (orders.length === 0) {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700">
                    <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                        Order History
                    </h2>
                </div>
                <div className="px-5 py-10 text-center text-gray-400 dark:text-gray-500 text-sm italic">
                    No orders found for this customer.
                </div>
            </div>
        );
    }

    // Sort orders by most recent first
    const sortedOrders = [...orders].sort((a, b) => {
        if (!a.orderDate) return 1;
        if (!b.orderDate) return -1;
        return new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime();
    });

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Order History
                </h2>
                <Chip size="sm" variant="flat" color="primary">
                    {orders.length} Order{orders.length !== 1 ? "s" : ""}
                </Chip>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-700/50">
                            <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                Order ID
                            </th>
                            <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                Ship Name
                            </th>
                            <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="text-right px-5 py-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                Freight
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {sortedOrders.map((order, idx) => {
                            const isShipped = !!order.shippedDate;
                            return (
                                <tr
                                    key={idx}
                                    onClick={() => navigate(`/orders/${order.id}`)}
                                    className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors cursor-pointer"
                                >
                                    <td className="px-5 py-4 whitespace-nowrap">
                                        <span className="font-mono font-medium text-blue-500 group-hover:underline">
                                            #{order.id}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                                        <div className="flex items-center gap-2">
                                            <CalendarDaysIcon className="w-4 h-4 text-gray-400" />
                                            {order.orderDate ?? "—"}
                                        </div>
                                    </td>
                                    <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                                        {order.shipName ?? "—"}
                                    </td>
                                    <td className="px-5 py-4 whitespace-nowrap">
                                        {isShipped ? (
                                            <Chip size="sm" color="success" variant="flat" startContent={<TruckIcon className="w-3 h-3" />}>
                                                Shipped
                                            </Chip>
                                        ) : (
                                            <Chip size="sm" color="warning" variant="flat">
                                                Pending
                                            </Chip>
                                        )}
                                    </td>
                                    <td className="px-5 py-4 text-right whitespace-nowrap font-mono text-gray-700 dark:text-gray-300">
                                        {order.freight != null ? `$${order.freight.toFixed(2)}` : "—"}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
