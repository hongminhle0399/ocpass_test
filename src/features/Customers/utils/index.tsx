import type {
  OrderModel,
  OrderQueryNode
} from "../types";

export function toOrderModel(orderNode: OrderQueryNode): OrderModel {
  return {
    id: orderNode.id,
    customerContactName: orderNode.customer?.contactName ?? null,
    customerId: orderNode.customerId ?? null,
    customerPhone: orderNode.customer?.phone ?? null,
    employeeName: `${orderNode.employee?.firstName + " "}${orderNode.employee?.lastName}`,
    orderDate: orderNode.orderDate,
    shipAddress: orderNode.shipAddress ?? null,
    shipCountry: orderNode.shipCountry ?? null,
    shipName: orderNode.shipName ?? null,
    shippedDate: orderNode.shippedDate,
  };
}

