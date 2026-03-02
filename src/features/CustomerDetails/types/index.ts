import type { GetCustomerProfileQuery } from "@/graphql/__generated__/graphql";

export type CustomerDetailsQueryNode = Extract<NonNullable<GetCustomerProfileQuery['node']>, { __typename?: 'Customer' | undefined }>

export type CustomerDetails = Omit<CustomerDetailsQueryNode, '__typename'>
