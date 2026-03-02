import { gql } from "@graphql/__generated__/gql";

export const GET_CUSTOMERS_QUERY = gql(`
query GetCustomers ($first: Int, $after: String) {
  customers (first: $first, after: $after) {
    nodes {
      ...CustomerFields
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`);

export const GET_CUSTOMERS_BY_ID_QUERY = gql(`
query GetCustomerById ($id: ID!) {
  nodes(ids: [$id]) {
      ... on Customer {
        ...CustomerFields
        demographics {
          customerDesc
        }
      }
    }
  }
`);
