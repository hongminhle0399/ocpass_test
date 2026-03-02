import type {
  CustomerModel,
  CustomerQueryNode,
} from "../types";

export function toCustomerModel(customerNode: CustomerQueryNode): CustomerModel {
  return {
    id: customerNode.id,
    city: customerNode.city ?? null,
    companyName: customerNode.companyName,
    contactName: customerNode.contactName ?? null,
    contactTitle: customerNode.contactTitle ?? null,
    country: customerNode.country ?? null,
    phone: customerNode.phone ?? null,
    postalCode: customerNode.postalCode ?? null
  };
}

