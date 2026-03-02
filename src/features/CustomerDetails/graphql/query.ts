import { gql } from "@/graphql/__generated__";

export const GET_CUSTOMER_PROFILE_QUERY = gql(`
  query GetCustomerProfile ($id: ID!) {
    node(id: $id) {
      ...CustomerFields
    }
  }
`);
