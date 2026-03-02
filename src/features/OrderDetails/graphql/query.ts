import { gql } from "@/graphql/__generated__";

export const GET_ORDER_DETAILS_QUERY = gql(`
query GerOrderDetails($orderId: Short, $after: String) {
  orders(where: { orderId: { eq: $orderId } }, after: $after) {
    nodes {
      orderDetails {
        product {
          unitsOnOrder
          reorderLevel
          category {
            categoryName
          }
          supplier {
            companyName
            country
          }
          productName
          unitPrice
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`);
