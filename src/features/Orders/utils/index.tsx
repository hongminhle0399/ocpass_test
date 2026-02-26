import type { OrderModel, OrderQueryNode } from "../types";

export function toOrderModel (orderNode: OrderQueryNode): OrderModel {
    return {
        id: orderNode.id,
        customerContactName: orderNode.customer?.contactName,
        customerId: orderNode.customerId,
        customerPhone: orderNode.customer?.phone,
        employeeName: `${orderNode.employee?.firstName} ${orderNode.employee?.lastName}`,
        orderDate: orderNode.orderDate,
        shipAddress: orderNode.shipAddress,
        shipCountry: orderNode.shipCountry,
        shipName: orderNode.shipName,
        shippedDate: orderNode.shippedDate
    }
}