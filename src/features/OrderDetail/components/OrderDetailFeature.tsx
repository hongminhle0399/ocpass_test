import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import type { OrderDetailFeatureQuery as OrderDetailFeatureQueryType } from "./__generated__/OrderDetailFeatureQuery.graphql";
import { OrderDetailHero } from "./OrderDetailHero";
import { OrderShippingInfo } from "./OrderShippingInfo";
// import { OrderCustomerInfo } from "./OrderCustomerInfo";
import { OrderItemsTable } from "./OrderItemsTable";
import { OrderEmployee } from "./OrderEmployee";

const orderDetailFeatureQuery = graphql`
  query OrderDetailFeatureQuery($id: ID!) {
    node(id: $id) {
      ... on Order {
        ...OrderDetailHero_order
        ...OrderShippingInfo_order
        ...OrderItemsTable_order
        ...OrderEmployee_order
      }
    }
  }
`;

interface OrderDetailFeatureProps {
    orderId: string;
}

export const OrderDetailFeature = ({ orderId }: OrderDetailFeatureProps) => {
    const data = useLazyLoadQuery<OrderDetailFeatureQueryType>(
        orderDetailFeatureQuery,
        { id: orderId },
    );

    const order = data.node;

    if (!order) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400 dark:text-gray-500 gap-3">
                <p className="text-5xl">📦</p>
                <p className="text-lg font-medium">Order not found</p>
                <p className="text-sm">No order with ID: {orderId}</p>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto">
            <OrderDetailHero order={order} />

            <div className="grid grid-cols-1 gap-4 mb-4">
                {/* <div className="lg:col-span-2 space-y-4"> */}
                {/* <OrderCustomerInfo order={order} /> */}
                <OrderEmployee order={order} />
                {/* </div> */}
                <div className="space-y-4">
                    <OrderShippingInfo order={order} />
                </div>
            </div>

            <OrderItemsTable order={order} />
        </div>
    );
};
