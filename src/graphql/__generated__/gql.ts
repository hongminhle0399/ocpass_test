/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetCustomerProfile ($id: ID!) {\n    node(id: $id) {\n      ...CustomerFields\n    }\n  }\n": typeof types.GetCustomerProfileDocument,
    "\nquery GetCustomers ($first: Int, $after: String) {\n  customers (first: $first, after: $after) {\n    nodes {\n      ...CustomerFields\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n": typeof types.GetCustomersDocument,
    "\nquery GetCustomerById ($id: ID!) {\n  nodes(ids: [$id]) {\n      ... on Customer {\n        ...CustomerFields\n        demographics {\n          customerDesc\n        }\n      }\n    }\n  }\n": typeof types.GetCustomerByIdDocument,
    "\nquery GerOrderDetails($orderId: Short, $after: String) {\n  orders(where: { orderId: { eq: $orderId } }, after: $after) {\n    nodes {\n      orderDetails {\n        product {\n          unitsOnOrder\n          reorderLevel\n          category {\n            categoryName\n          }\n          supplier {\n            companyName\n            country\n          }\n          productName\n          unitPrice\n        }\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n": typeof types.GerOrderDetailsDocument,
    "\n  query GetOrdersByOrderDate(\n  $first: Int\n  $after: String\n  $startOrderDate: LocalDate\n  $endOrderDate: LocalDate\n) {\n  orders(\n    first: $first\n    after: $after\n    where: {\n      and: [\n        { orderDate: { gte: $startOrderDate } }\n        { orderDate: { lte: $endOrderDate } }\n      ]\n    }\n  ) {\n    nodes {\n      id\n      shipName\n      shipAddress\n      shipCountry\n      customerId\n\n      customer {\n        contactName\n        phone\n      }\n      employee {\n        lastName\n        firstName\n      }\n      orderDate\n      shippedDate\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n": typeof types.GetOrdersByOrderDateDocument,
    "\n  query GetOrders(\n  $first: Int\n  $after: String\n) {\n  orders(\n    first: $first\n    after: $after\n  ) {\n    nodes {\n      id\n      shipName\n      shipAddress\n      shipCountry\n      customerId\n\n      customer {\n        contactName\n        phone\n      }\n      employee {\n        lastName\n        firstName\n      }\n      orderDate\n      shippedDate\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n": typeof types.GetOrdersDocument,
    "\nfragment CustomerFields on Customer {\n  id\n  contactName\n  contactTitle\n  phone\n  city\n  country\n  address\n  postalCode\n  companyName\n}\n": typeof types.CustomerFieldsFragmentDoc,
};
const documents: Documents = {
    "\n  query GetCustomerProfile ($id: ID!) {\n    node(id: $id) {\n      ...CustomerFields\n    }\n  }\n": types.GetCustomerProfileDocument,
    "\nquery GetCustomers ($first: Int, $after: String) {\n  customers (first: $first, after: $after) {\n    nodes {\n      ...CustomerFields\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n": types.GetCustomersDocument,
    "\nquery GetCustomerById ($id: ID!) {\n  nodes(ids: [$id]) {\n      ... on Customer {\n        ...CustomerFields\n        demographics {\n          customerDesc\n        }\n      }\n    }\n  }\n": types.GetCustomerByIdDocument,
    "\nquery GerOrderDetails($orderId: Short, $after: String) {\n  orders(where: { orderId: { eq: $orderId } }, after: $after) {\n    nodes {\n      orderDetails {\n        product {\n          unitsOnOrder\n          reorderLevel\n          category {\n            categoryName\n          }\n          supplier {\n            companyName\n            country\n          }\n          productName\n          unitPrice\n        }\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n": types.GerOrderDetailsDocument,
    "\n  query GetOrdersByOrderDate(\n  $first: Int\n  $after: String\n  $startOrderDate: LocalDate\n  $endOrderDate: LocalDate\n) {\n  orders(\n    first: $first\n    after: $after\n    where: {\n      and: [\n        { orderDate: { gte: $startOrderDate } }\n        { orderDate: { lte: $endOrderDate } }\n      ]\n    }\n  ) {\n    nodes {\n      id\n      shipName\n      shipAddress\n      shipCountry\n      customerId\n\n      customer {\n        contactName\n        phone\n      }\n      employee {\n        lastName\n        firstName\n      }\n      orderDate\n      shippedDate\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n": types.GetOrdersByOrderDateDocument,
    "\n  query GetOrders(\n  $first: Int\n  $after: String\n) {\n  orders(\n    first: $first\n    after: $after\n  ) {\n    nodes {\n      id\n      shipName\n      shipAddress\n      shipCountry\n      customerId\n\n      customer {\n        contactName\n        phone\n      }\n      employee {\n        lastName\n        firstName\n      }\n      orderDate\n      shippedDate\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n": types.GetOrdersDocument,
    "\nfragment CustomerFields on Customer {\n  id\n  contactName\n  contactTitle\n  phone\n  city\n  country\n  address\n  postalCode\n  companyName\n}\n": types.CustomerFieldsFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCustomerProfile ($id: ID!) {\n    node(id: $id) {\n      ...CustomerFields\n    }\n  }\n"): (typeof documents)["\n  query GetCustomerProfile ($id: ID!) {\n    node(id: $id) {\n      ...CustomerFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetCustomers ($first: Int, $after: String) {\n  customers (first: $first, after: $after) {\n    nodes {\n      ...CustomerFields\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"): (typeof documents)["\nquery GetCustomers ($first: Int, $after: String) {\n  customers (first: $first, after: $after) {\n    nodes {\n      ...CustomerFields\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetCustomerById ($id: ID!) {\n  nodes(ids: [$id]) {\n      ... on Customer {\n        ...CustomerFields\n        demographics {\n          customerDesc\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nquery GetCustomerById ($id: ID!) {\n  nodes(ids: [$id]) {\n      ... on Customer {\n        ...CustomerFields\n        demographics {\n          customerDesc\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GerOrderDetails($orderId: Short, $after: String) {\n  orders(where: { orderId: { eq: $orderId } }, after: $after) {\n    nodes {\n      orderDetails {\n        product {\n          unitsOnOrder\n          reorderLevel\n          category {\n            categoryName\n          }\n          supplier {\n            companyName\n            country\n          }\n          productName\n          unitPrice\n        }\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"): (typeof documents)["\nquery GerOrderDetails($orderId: Short, $after: String) {\n  orders(where: { orderId: { eq: $orderId } }, after: $after) {\n    nodes {\n      orderDetails {\n        product {\n          unitsOnOrder\n          reorderLevel\n          category {\n            categoryName\n          }\n          supplier {\n            companyName\n            country\n          }\n          productName\n          unitPrice\n        }\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetOrdersByOrderDate(\n  $first: Int\n  $after: String\n  $startOrderDate: LocalDate\n  $endOrderDate: LocalDate\n) {\n  orders(\n    first: $first\n    after: $after\n    where: {\n      and: [\n        { orderDate: { gte: $startOrderDate } }\n        { orderDate: { lte: $endOrderDate } }\n      ]\n    }\n  ) {\n    nodes {\n      id\n      shipName\n      shipAddress\n      shipCountry\n      customerId\n\n      customer {\n        contactName\n        phone\n      }\n      employee {\n        lastName\n        firstName\n      }\n      orderDate\n      shippedDate\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"): (typeof documents)["\n  query GetOrdersByOrderDate(\n  $first: Int\n  $after: String\n  $startOrderDate: LocalDate\n  $endOrderDate: LocalDate\n) {\n  orders(\n    first: $first\n    after: $after\n    where: {\n      and: [\n        { orderDate: { gte: $startOrderDate } }\n        { orderDate: { lte: $endOrderDate } }\n      ]\n    }\n  ) {\n    nodes {\n      id\n      shipName\n      shipAddress\n      shipCountry\n      customerId\n\n      customer {\n        contactName\n        phone\n      }\n      employee {\n        lastName\n        firstName\n      }\n      orderDate\n      shippedDate\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetOrders(\n  $first: Int\n  $after: String\n) {\n  orders(\n    first: $first\n    after: $after\n  ) {\n    nodes {\n      id\n      shipName\n      shipAddress\n      shipCountry\n      customerId\n\n      customer {\n        contactName\n        phone\n      }\n      employee {\n        lastName\n        firstName\n      }\n      orderDate\n      shippedDate\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"): (typeof documents)["\n  query GetOrders(\n  $first: Int\n  $after: String\n) {\n  orders(\n    first: $first\n    after: $after\n  ) {\n    nodes {\n      id\n      shipName\n      shipAddress\n      shipCountry\n      customerId\n\n      customer {\n        contactName\n        phone\n      }\n      employee {\n        lastName\n        firstName\n      }\n      orderDate\n      shippedDate\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment CustomerFields on Customer {\n  id\n  contactName\n  contactTitle\n  phone\n  city\n  country\n  address\n  postalCode\n  companyName\n}\n"): (typeof documents)["\nfragment CustomerFields on Customer {\n  id\n  contactName\n  contactTitle\n  phone\n  city\n  country\n  address\n  postalCode\n  companyName\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;