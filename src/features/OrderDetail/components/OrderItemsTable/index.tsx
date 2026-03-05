import { graphql, useFragment } from "react-relay";
import type { OrderItemsTable_order$key } from "./__generated__/OrderItemsTable_order.graphql";
import { Chip } from "@heroui/react";
import { CubeIcon } from "@heroicons/react/24/outline";

const orderItemsTableFragment = graphql`
  fragment OrderItemsTable_order on Order {
    orderDetails {
      unitPrice
      quantity
      discount
      product {
        productName
        quantityPerUnit
        unitPrice
      }
    }
  }
`;

interface OrderItemsTableProps {
    order: OrderItemsTable_order$key;
}

export const OrderItemsTable = ({ order }: OrderItemsTableProps) => {
    const data = useFragment(orderItemsTableFragment, order);
    const items = data.orderDetails ?? [];

    const totalAmount = items.reduce((acc, item) => {
        const subtotal = item.unitPrice * item.quantity * (1 - item.discount);
        return acc + subtotal;
    }, 0);

    if (items.length === 0) {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700">
                    <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                        Order Items
                    </h2>
                </div>
                <div className="px-5 py-10 text-center text-gray-400 dark:text-gray-500 text-sm italic">
                    No items in this order.
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Order Items
                </h2>
                <Chip size="sm" variant="flat" color="primary">
                    {items.length} item{items.length !== 1 ? "s" : ""}
                </Chip>
            </div>

            {/* Desktop table */}
            <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-700/50">
                            <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                Product
                            </th>
                            <th className="text-right px-5 py-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                Unit Price
                            </th>
                            <th className="text-right px-5 py-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                Qty
                            </th>
                            <th className="text-right px-5 py-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                Discount
                            </th>
                            <th className="text-right px-5 py-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                Subtotal
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {items.map((item, idx) => {
                            const subtotal = item.unitPrice * item.quantity * (1 - item.discount);
                            return (
                                <tr
                                    key={idx}
                                    className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                                >
                                    <td className="px-5 py-3.5">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                                <CubeIcon className="w-4 h-4 text-blue-400" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800 dark:text-gray-200">
                                                    {item.product?.productName ?? "—"}
                                                </p>
                                                {item.product?.quantityPerUnit && (
                                                    <p className="text-xs text-gray-400 dark:text-gray-500">
                                                        {item.product.quantityPerUnit}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-3.5 text-right font-mono text-gray-700 dark:text-gray-300">
                                        ${item.unitPrice.toFixed(2)}
                                    </td>
                                    <td className="px-5 py-3.5 text-right text-gray-700 dark:text-gray-300">
                                        {item.quantity}
                                    </td>
                                    <td className="px-5 py-3.5 text-right">
                                        {item.discount > 0 ? (
                                            <Chip size="sm" color="warning" variant="flat">
                                                -{(item.discount * 100).toFixed(0)}%
                                            </Chip>
                                        ) : (
                                            <span className="text-gray-300 dark:text-gray-600">—</span>
                                        )}
                                    </td>
                                    <td className="px-5 py-3.5 text-right font-semibold font-mono text-gray-900 dark:text-gray-100">
                                        ${subtotal.toFixed(2)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Mobile list */}
            <div className="sm:hidden divide-y divide-gray-100 dark:divide-gray-700">
                {items.map((item, idx) => {
                    const subtotal = item.unitPrice * item.quantity * (1 - item.discount);
                    return (
                        <div key={idx} className="px-5 py-4 flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                <CubeIcon className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm text-gray-800 dark:text-gray-200 truncate">
                                    {item.product?.productName ?? "—"}
                                </p>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                                    {item.quantity} × ${item.unitPrice.toFixed(2)}
                                    {item.discount > 0
                                        ? ` − ${(item.discount * 100).toFixed(0)}%`
                                        : ""}
                                </p>
                            </div>
                            <div className="font-semibold font-mono text-sm text-gray-900 dark:text-gray-100 shrink-0">
                                ${subtotal.toFixed(2)}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Total footer */}
            <div className="px-5 py-4 bg-gray-50 dark:bg-gray-700/30 border-t border-gray-100 dark:border-gray-700 flex justify-end items-center gap-4">
                <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">
                    Total
                </span>
                <span className="text-lg font-bold font-mono text-gray-900 dark:text-gray-100">
                    ${totalAmount.toFixed(2)}
                </span>
            </div>
        </div>
    );
};
