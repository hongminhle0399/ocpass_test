import { gql } from "@graphql/__generated__/gql";

export const GET_ORDERS_QUERY = gql(`
query GetOrders($first: Int, $after: String) {
  orders(first: $first, after: $after) {
    nodes {
      id
      shipName
      shipAddress
      shipCountry
      customerId

      customer {
        contactName
        phone
      }
      employee {
        lastName
        firstName
      }
      orderDate
      shippedDate
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`);
