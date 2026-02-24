/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Byte` scalar type represents non-fractional whole numeric values. Byte can represent values between 0 and 255. */
  Byte: { input: any; output: any; }
  /** The `LocalDate` scalar type represents a ISO date string, represented as UTF-8 character sequences YYYY-MM-DD. The scalar follows the specification defined in RFC3339 */
  LocalDate: { input: any; output: any; }
  /** The `Short` scalar type represents non-fractional signed whole 16-bit numeric values. Short can represent values between -(2^15) and 2^15 - 1. */
  Short: { input: any; output: any; }
};

export type ByteOperationFilterInput = {
  eq?: InputMaybe<Scalars['Byte']['input']>;
  gt?: InputMaybe<Scalars['Byte']['input']>;
  gte?: InputMaybe<Scalars['Byte']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  lt?: InputMaybe<Scalars['Byte']['input']>;
  lte?: InputMaybe<Scalars['Byte']['input']>;
  neq?: InputMaybe<Scalars['Byte']['input']>;
  ngt?: InputMaybe<Scalars['Byte']['input']>;
  ngte?: InputMaybe<Scalars['Byte']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  nlt?: InputMaybe<Scalars['Byte']['input']>;
  nlte?: InputMaybe<Scalars['Byte']['input']>;
};

export type Category = Node & {
  __typename?: 'Category';
  categoryName: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  picture?: Maybe<Array<Scalars['Byte']['output']>>;
  products: Array<Product>;
};

export type CategoryFilterInput = {
  and?: InputMaybe<Array<CategoryFilterInput>>;
  categoryId?: InputMaybe<ShortOperationFilterInput>;
  categoryName?: InputMaybe<StringOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CategoryFilterInput>>;
  picture?: InputMaybe<ListByteOperationFilterInput>;
  products?: InputMaybe<ListFilterInputTypeOfProductFilterInput>;
};

export type CategorySortInput = {
  categoryId?: InputMaybe<SortEnumType>;
  categoryName?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  companyName: Scalars['String']['output'];
  contactName?: Maybe<Scalars['String']['output']>;
  contactTitle?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  demographics: Array<CustomerDemographic>;
  fax?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  orders: Array<Order>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

export type CustomerDemographic = {
  __typename?: 'CustomerDemographic';
  customerDesc?: Maybe<Scalars['String']['output']>;
  customerTypeId: Scalars['String']['output'];
  customers: Array<Customer>;
};

export type CustomerDemographicFilterInput = {
  and?: InputMaybe<Array<CustomerDemographicFilterInput>>;
  customerDesc?: InputMaybe<StringOperationFilterInput>;
  customerTypeId?: InputMaybe<StringOperationFilterInput>;
  customers?: InputMaybe<ListFilterInputTypeOfCustomerFilterInput>;
  or?: InputMaybe<Array<CustomerDemographicFilterInput>>;
};

export type CustomerFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<CustomerFilterInput>>;
  city?: InputMaybe<StringOperationFilterInput>;
  companyName?: InputMaybe<StringOperationFilterInput>;
  contactName?: InputMaybe<StringOperationFilterInput>;
  contactTitle?: InputMaybe<StringOperationFilterInput>;
  country?: InputMaybe<StringOperationFilterInput>;
  customerId?: InputMaybe<StringOperationFilterInput>;
  demographics?: InputMaybe<ListFilterInputTypeOfCustomerDemographicFilterInput>;
  fax?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CustomerFilterInput>>;
  orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>;
  phone?: InputMaybe<StringOperationFilterInput>;
  postalCode?: InputMaybe<StringOperationFilterInput>;
  region?: InputMaybe<StringOperationFilterInput>;
};

export type CustomerSortInput = {
  address?: InputMaybe<SortEnumType>;
  city?: InputMaybe<SortEnumType>;
  companyName?: InputMaybe<SortEnumType>;
  contactName?: InputMaybe<SortEnumType>;
  contactTitle?: InputMaybe<SortEnumType>;
  country?: InputMaybe<SortEnumType>;
  customerId?: InputMaybe<SortEnumType>;
  fax?: InputMaybe<SortEnumType>;
  phone?: InputMaybe<SortEnumType>;
  postalCode?: InputMaybe<SortEnumType>;
  region?: InputMaybe<SortEnumType>;
};

export type Employee = Node & {
  __typename?: 'Employee';
  address?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['LocalDate']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  directReports: Array<Employee>;
  extension?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  hireDate?: Maybe<Scalars['LocalDate']['output']>;
  homePhone?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  manager?: Maybe<Employee>;
  notes?: Maybe<Scalars['String']['output']>;
  orders: Array<Order>;
  photo?: Maybe<Array<Scalars['Byte']['output']>>;
  photoPath?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  reportsTo?: Maybe<Scalars['Short']['output']>;
  territories: Array<Territory>;
  title?: Maybe<Scalars['String']['output']>;
  titleOfCourtesy?: Maybe<Scalars['String']['output']>;
};

export type EmployeeFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<EmployeeFilterInput>>;
  birthDate?: InputMaybe<LocalDateOperationFilterInput>;
  city?: InputMaybe<StringOperationFilterInput>;
  country?: InputMaybe<StringOperationFilterInput>;
  directReports?: InputMaybe<ListFilterInputTypeOfEmployeeFilterInput>;
  employeeId?: InputMaybe<ShortOperationFilterInput>;
  extension?: InputMaybe<StringOperationFilterInput>;
  firstName?: InputMaybe<StringOperationFilterInput>;
  hireDate?: InputMaybe<LocalDateOperationFilterInput>;
  homePhone?: InputMaybe<StringOperationFilterInput>;
  lastName?: InputMaybe<StringOperationFilterInput>;
  manager?: InputMaybe<EmployeeFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<EmployeeFilterInput>>;
  orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>;
  photo?: InputMaybe<ListByteOperationFilterInput>;
  photoPath?: InputMaybe<StringOperationFilterInput>;
  postalCode?: InputMaybe<StringOperationFilterInput>;
  region?: InputMaybe<StringOperationFilterInput>;
  reportsTo?: InputMaybe<ShortOperationFilterInput>;
  territories?: InputMaybe<ListFilterInputTypeOfTerritoryFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
  titleOfCourtesy?: InputMaybe<StringOperationFilterInput>;
};

export type EmployeeSortInput = {
  address?: InputMaybe<SortEnumType>;
  birthDate?: InputMaybe<SortEnumType>;
  city?: InputMaybe<SortEnumType>;
  country?: InputMaybe<SortEnumType>;
  employeeId?: InputMaybe<SortEnumType>;
  extension?: InputMaybe<SortEnumType>;
  firstName?: InputMaybe<SortEnumType>;
  hireDate?: InputMaybe<SortEnumType>;
  homePhone?: InputMaybe<SortEnumType>;
  lastName?: InputMaybe<SortEnumType>;
  manager?: InputMaybe<EmployeeSortInput>;
  notes?: InputMaybe<SortEnumType>;
  photoPath?: InputMaybe<SortEnumType>;
  postalCode?: InputMaybe<SortEnumType>;
  region?: InputMaybe<SortEnumType>;
  reportsTo?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
  titleOfCourtesy?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type EmployeesConnection = {
  __typename?: 'EmployeesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<EmployeesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Employee>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EmployeesEdge = {
  __typename?: 'EmployeesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Employee;
};

export type Error = {
  message: Scalars['String']['output'];
};

export type FloatOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  ngt?: InputMaybe<Scalars['Float']['input']>;
  ngte?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  nlt?: InputMaybe<Scalars['Float']['input']>;
  nlte?: InputMaybe<Scalars['Float']['input']>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListByteOperationFilterInput = {
  all?: InputMaybe<ByteOperationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ByteOperationFilterInput>;
  some?: InputMaybe<ByteOperationFilterInput>;
};

export type ListFilterInputTypeOfCustomerDemographicFilterInput = {
  all?: InputMaybe<CustomerDemographicFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<CustomerDemographicFilterInput>;
  some?: InputMaybe<CustomerDemographicFilterInput>;
};

export type ListFilterInputTypeOfCustomerFilterInput = {
  all?: InputMaybe<CustomerFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<CustomerFilterInput>;
  some?: InputMaybe<CustomerFilterInput>;
};

export type ListFilterInputTypeOfEmployeeFilterInput = {
  all?: InputMaybe<EmployeeFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<EmployeeFilterInput>;
  some?: InputMaybe<EmployeeFilterInput>;
};

export type ListFilterInputTypeOfOrderDetailFilterInput = {
  all?: InputMaybe<OrderDetailFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<OrderDetailFilterInput>;
  some?: InputMaybe<OrderDetailFilterInput>;
};

export type ListFilterInputTypeOfOrderFilterInput = {
  all?: InputMaybe<OrderFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<OrderFilterInput>;
  some?: InputMaybe<OrderFilterInput>;
};

export type ListFilterInputTypeOfProductFilterInput = {
  all?: InputMaybe<ProductFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ProductFilterInput>;
  some?: InputMaybe<ProductFilterInput>;
};

export type ListFilterInputTypeOfTerritoryFilterInput = {
  all?: InputMaybe<TerritoryFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<TerritoryFilterInput>;
  some?: InputMaybe<TerritoryFilterInput>;
};

export type LocalDateOperationFilterInput = {
  eq?: InputMaybe<Scalars['LocalDate']['input']>;
  gt?: InputMaybe<Scalars['LocalDate']['input']>;
  gte?: InputMaybe<Scalars['LocalDate']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['LocalDate']['input']>>>;
  lt?: InputMaybe<Scalars['LocalDate']['input']>;
  lte?: InputMaybe<Scalars['LocalDate']['input']>;
  neq?: InputMaybe<Scalars['LocalDate']['input']>;
  ngt?: InputMaybe<Scalars['LocalDate']['input']>;
  ngte?: InputMaybe<Scalars['LocalDate']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['LocalDate']['input']>>>;
  nlt?: InputMaybe<Scalars['LocalDate']['input']>;
  nlte?: InputMaybe<Scalars['LocalDate']['input']>;
};

/** The node interface is implemented by entities that have a global unique identifier. */
export type Node = {
  id: Scalars['ID']['output'];
};

export type Order = Node & {
  __typename?: 'Order';
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['String']['output']>;
  employee?: Maybe<Employee>;
  employeeId?: Maybe<Scalars['Short']['output']>;
  freight?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  orderDate?: Maybe<Scalars['LocalDate']['output']>;
  orderDetails: Array<OrderDetail>;
  products?: Maybe<Array<Product>>;
  requiredDate?: Maybe<Scalars['LocalDate']['output']>;
  shipAddress?: Maybe<Scalars['String']['output']>;
  shipCity?: Maybe<Scalars['String']['output']>;
  shipCountry?: Maybe<Scalars['String']['output']>;
  shipName?: Maybe<Scalars['String']['output']>;
  shipPostalCode?: Maybe<Scalars['String']['output']>;
  shipRegion?: Maybe<Scalars['String']['output']>;
  shipVia?: Maybe<Scalars['Short']['output']>;
  shippedDate?: Maybe<Scalars['LocalDate']['output']>;
  shipper?: Maybe<Shipper>;
};

export type OrderDetail = {
  __typename?: 'OrderDetail';
  discount: Scalars['Float']['output'];
  order: Order;
  orderId: Scalars['ID']['output'];
  product?: Maybe<Product>;
  productId: Scalars['ID']['output'];
  quantity: Scalars['Short']['output'];
  unitPrice: Scalars['Float']['output'];
};

export type OrderDetailFilterInput = {
  and?: InputMaybe<Array<OrderDetailFilterInput>>;
  discount?: InputMaybe<FloatOperationFilterInput>;
  or?: InputMaybe<Array<OrderDetailFilterInput>>;
  order?: InputMaybe<OrderFilterInput>;
  orderId?: InputMaybe<ShortOperationFilterInput>;
  product?: InputMaybe<ProductFilterInput>;
  productId?: InputMaybe<ShortOperationFilterInput>;
  quantity?: InputMaybe<ShortOperationFilterInput>;
  unitPrice?: InputMaybe<FloatOperationFilterInput>;
};

export type OrderFilterInput = {
  and?: InputMaybe<Array<OrderFilterInput>>;
  customer?: InputMaybe<CustomerFilterInput>;
  customerId?: InputMaybe<StringOperationFilterInput>;
  employee?: InputMaybe<EmployeeFilterInput>;
  employeeId?: InputMaybe<ShortOperationFilterInput>;
  freight?: InputMaybe<FloatOperationFilterInput>;
  or?: InputMaybe<Array<OrderFilterInput>>;
  orderDate?: InputMaybe<LocalDateOperationFilterInput>;
  orderDetails?: InputMaybe<ListFilterInputTypeOfOrderDetailFilterInput>;
  orderId?: InputMaybe<ShortOperationFilterInput>;
  requiredDate?: InputMaybe<LocalDateOperationFilterInput>;
  shipAddress?: InputMaybe<StringOperationFilterInput>;
  shipCity?: InputMaybe<StringOperationFilterInput>;
  shipCountry?: InputMaybe<StringOperationFilterInput>;
  shipName?: InputMaybe<StringOperationFilterInput>;
  shipPostalCode?: InputMaybe<StringOperationFilterInput>;
  shipRegion?: InputMaybe<StringOperationFilterInput>;
  shipVia?: InputMaybe<ShortOperationFilterInput>;
  shippedDate?: InputMaybe<LocalDateOperationFilterInput>;
  shipper?: InputMaybe<ShipperFilterInput>;
};

export type OrderSortInput = {
  customer?: InputMaybe<CustomerSortInput>;
  customerId?: InputMaybe<SortEnumType>;
  employee?: InputMaybe<EmployeeSortInput>;
  employeeId?: InputMaybe<SortEnumType>;
  freight?: InputMaybe<SortEnumType>;
  orderDate?: InputMaybe<SortEnumType>;
  orderId?: InputMaybe<SortEnumType>;
  requiredDate?: InputMaybe<SortEnumType>;
  shipAddress?: InputMaybe<SortEnumType>;
  shipCity?: InputMaybe<SortEnumType>;
  shipCountry?: InputMaybe<SortEnumType>;
  shipName?: InputMaybe<SortEnumType>;
  shipPostalCode?: InputMaybe<SortEnumType>;
  shipRegion?: InputMaybe<SortEnumType>;
  shipVia?: InputMaybe<SortEnumType>;
  shippedDate?: InputMaybe<SortEnumType>;
  shipper?: InputMaybe<ShipperSortInput>;
};

/** A connection to a list of items. */
export type OrdersConnection = {
  __typename?: 'OrdersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<OrdersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Order>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrdersEdge = {
  __typename?: 'OrdersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Order;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Product = Node & {
  __typename?: 'Product';
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['Short']['output']>;
  discontinued: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  orderDetails: Array<OrderDetail>;
  productName: Scalars['String']['output'];
  quantityPerUnit?: Maybe<Scalars['String']['output']>;
  reorderLevel?: Maybe<Scalars['Short']['output']>;
  supplier?: Maybe<Supplier>;
  supplierId?: Maybe<Scalars['Short']['output']>;
  unitPrice?: Maybe<Scalars['Float']['output']>;
  unitsInStock?: Maybe<Scalars['Short']['output']>;
  unitsOnOrder?: Maybe<Scalars['Short']['output']>;
};

export type ProductFilterInput = {
  and?: InputMaybe<Array<ProductFilterInput>>;
  category?: InputMaybe<CategoryFilterInput>;
  categoryId?: InputMaybe<ShortOperationFilterInput>;
  discontinued?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<ProductFilterInput>>;
  orderDetails?: InputMaybe<ListFilterInputTypeOfOrderDetailFilterInput>;
  productId?: InputMaybe<ShortOperationFilterInput>;
  productName?: InputMaybe<StringOperationFilterInput>;
  quantityPerUnit?: InputMaybe<StringOperationFilterInput>;
  reorderLevel?: InputMaybe<ShortOperationFilterInput>;
  supplier?: InputMaybe<SupplierFilterInput>;
  supplierId?: InputMaybe<ShortOperationFilterInput>;
  unitPrice?: InputMaybe<FloatOperationFilterInput>;
  unitsInStock?: InputMaybe<ShortOperationFilterInput>;
  unitsOnOrder?: InputMaybe<ShortOperationFilterInput>;
};

export type ProductSortInput = {
  category?: InputMaybe<CategorySortInput>;
  categoryId?: InputMaybe<SortEnumType>;
  discontinued?: InputMaybe<SortEnumType>;
  productId?: InputMaybe<SortEnumType>;
  productName?: InputMaybe<SortEnumType>;
  quantityPerUnit?: InputMaybe<SortEnumType>;
  reorderLevel?: InputMaybe<SortEnumType>;
  supplier?: InputMaybe<SupplierSortInput>;
  supplierId?: InputMaybe<SortEnumType>;
  unitPrice?: InputMaybe<SortEnumType>;
  unitsInStock?: InputMaybe<SortEnumType>;
  unitsOnOrder?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Product>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductsEdge = {
  __typename?: 'ProductsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Product;
};

export type Query = {
  __typename?: 'Query';
  employees?: Maybe<EmployeesConnection>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Lookup nodes by a list of IDs. */
  nodes: Array<Maybe<Node>>;
  orders?: Maybe<OrdersConnection>;
  products?: Maybe<ProductsConnection>;
};


export type QueryEmployeesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<EmployeeSortInput>>;
  where?: InputMaybe<EmployeeFilterInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderSortInput>>;
  where?: InputMaybe<OrderFilterInput>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductSortInput>>;
  where?: InputMaybe<ProductFilterInput>;
};

export type Region = {
  __typename?: 'Region';
  regionDescription: Scalars['String']['output'];
  regionId: Scalars['Short']['output'];
  territories: Array<Territory>;
};

export type RegionFilterInput = {
  and?: InputMaybe<Array<RegionFilterInput>>;
  or?: InputMaybe<Array<RegionFilterInput>>;
  regionDescription?: InputMaybe<StringOperationFilterInput>;
  regionId?: InputMaybe<ShortOperationFilterInput>;
  territories?: InputMaybe<ListFilterInputTypeOfTerritoryFilterInput>;
};

export type Shipper = Node & {
  __typename?: 'Shipper';
  companyName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  orders: Array<Order>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type ShipperFilterInput = {
  and?: InputMaybe<Array<ShipperFilterInput>>;
  companyName?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ShipperFilterInput>>;
  orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>;
  phone?: InputMaybe<StringOperationFilterInput>;
  shipperId?: InputMaybe<ShortOperationFilterInput>;
};

export type ShipperSortInput = {
  companyName?: InputMaybe<SortEnumType>;
  phone?: InputMaybe<SortEnumType>;
  shipperId?: InputMaybe<SortEnumType>;
};

export type ShortOperationFilterInput = {
  eq?: InputMaybe<Scalars['Short']['input']>;
  gt?: InputMaybe<Scalars['Short']['input']>;
  gte?: InputMaybe<Scalars['Short']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  lt?: InputMaybe<Scalars['Short']['input']>;
  lte?: InputMaybe<Scalars['Short']['input']>;
  neq?: InputMaybe<Scalars['Short']['input']>;
  ngt?: InputMaybe<Scalars['Short']['input']>;
  ngte?: InputMaybe<Scalars['Short']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  nlt?: InputMaybe<Scalars['Short']['input']>;
  nlte?: InputMaybe<Scalars['Short']['input']>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Supplier = Node & {
  __typename?: 'Supplier';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  companyName: Scalars['String']['output'];
  contactName?: Maybe<Scalars['String']['output']>;
  contactTitle?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  homepage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  products: Array<Product>;
  region?: Maybe<Scalars['String']['output']>;
};

export type SupplierFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<SupplierFilterInput>>;
  city?: InputMaybe<StringOperationFilterInput>;
  companyName?: InputMaybe<StringOperationFilterInput>;
  contactName?: InputMaybe<StringOperationFilterInput>;
  contactTitle?: InputMaybe<StringOperationFilterInput>;
  country?: InputMaybe<StringOperationFilterInput>;
  fax?: InputMaybe<StringOperationFilterInput>;
  homepage?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SupplierFilterInput>>;
  phone?: InputMaybe<StringOperationFilterInput>;
  postalCode?: InputMaybe<StringOperationFilterInput>;
  products?: InputMaybe<ListFilterInputTypeOfProductFilterInput>;
  region?: InputMaybe<StringOperationFilterInput>;
  supplierId?: InputMaybe<ShortOperationFilterInput>;
};

export type SupplierSortInput = {
  address?: InputMaybe<SortEnumType>;
  city?: InputMaybe<SortEnumType>;
  companyName?: InputMaybe<SortEnumType>;
  contactName?: InputMaybe<SortEnumType>;
  contactTitle?: InputMaybe<SortEnumType>;
  country?: InputMaybe<SortEnumType>;
  fax?: InputMaybe<SortEnumType>;
  homepage?: InputMaybe<SortEnumType>;
  phone?: InputMaybe<SortEnumType>;
  postalCode?: InputMaybe<SortEnumType>;
  region?: InputMaybe<SortEnumType>;
  supplierId?: InputMaybe<SortEnumType>;
};

export type Territory = {
  __typename?: 'Territory';
  employees: Array<Employee>;
  region: Region;
  regionId: Scalars['Short']['output'];
  territoryDescription: Scalars['String']['output'];
  territoryId: Scalars['String']['output'];
};

export type TerritoryFilterInput = {
  and?: InputMaybe<Array<TerritoryFilterInput>>;
  employees?: InputMaybe<ListFilterInputTypeOfEmployeeFilterInput>;
  or?: InputMaybe<Array<TerritoryFilterInput>>;
  region?: InputMaybe<RegionFilterInput>;
  regionId?: InputMaybe<ShortOperationFilterInput>;
  territoryDescription?: InputMaybe<StringOperationFilterInput>;
  territoryId?: InputMaybe<StringOperationFilterInput>;
};

export type GetOrdersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetOrdersQuery = { __typename?: 'Query', orders?: { __typename?: 'OrdersConnection', nodes?: Array<{ __typename?: 'Order', id: string, shipName?: string | null, shipAddress?: string | null }> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null };


export const GetOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shipName"}},{"kind":"Field","name":{"kind":"Name","value":"shipAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<GetOrdersQuery, GetOrdersQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Byte` scalar type represents non-fractional whole numeric values. Byte can represent values between 0 and 255. */
  Byte: { input: any; output: any; }
  /** The `LocalDate` scalar type represents a ISO date string, represented as UTF-8 character sequences YYYY-MM-DD. The scalar follows the specification defined in RFC3339 */
  LocalDate: { input: any; output: any; }
  /** The `Short` scalar type represents non-fractional signed whole 16-bit numeric values. Short can represent values between -(2^15) and 2^15 - 1. */
  Short: { input: any; output: any; }
};

export type ByteOperationFilterInput = {
  eq?: InputMaybe<Scalars['Byte']['input']>;
  gt?: InputMaybe<Scalars['Byte']['input']>;
  gte?: InputMaybe<Scalars['Byte']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  lt?: InputMaybe<Scalars['Byte']['input']>;
  lte?: InputMaybe<Scalars['Byte']['input']>;
  neq?: InputMaybe<Scalars['Byte']['input']>;
  ngt?: InputMaybe<Scalars['Byte']['input']>;
  ngte?: InputMaybe<Scalars['Byte']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  nlt?: InputMaybe<Scalars['Byte']['input']>;
  nlte?: InputMaybe<Scalars['Byte']['input']>;
};

export type Category = Node & {
  __typename?: 'Category';
  categoryName: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  picture?: Maybe<Array<Scalars['Byte']['output']>>;
  products: Array<Product>;
};

export type CategoryFilterInput = {
  and?: InputMaybe<Array<CategoryFilterInput>>;
  categoryId?: InputMaybe<ShortOperationFilterInput>;
  categoryName?: InputMaybe<StringOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CategoryFilterInput>>;
  picture?: InputMaybe<ListByteOperationFilterInput>;
  products?: InputMaybe<ListFilterInputTypeOfProductFilterInput>;
};

export type CategorySortInput = {
  categoryId?: InputMaybe<SortEnumType>;
  categoryName?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  companyName: Scalars['String']['output'];
  contactName?: Maybe<Scalars['String']['output']>;
  contactTitle?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  demographics: Array<CustomerDemographic>;
  fax?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  orders: Array<Order>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

export type CustomerDemographic = {
  __typename?: 'CustomerDemographic';
  customerDesc?: Maybe<Scalars['String']['output']>;
  customerTypeId: Scalars['String']['output'];
  customers: Array<Customer>;
};

export type CustomerDemographicFilterInput = {
  and?: InputMaybe<Array<CustomerDemographicFilterInput>>;
  customerDesc?: InputMaybe<StringOperationFilterInput>;
  customerTypeId?: InputMaybe<StringOperationFilterInput>;
  customers?: InputMaybe<ListFilterInputTypeOfCustomerFilterInput>;
  or?: InputMaybe<Array<CustomerDemographicFilterInput>>;
};

export type CustomerFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<CustomerFilterInput>>;
  city?: InputMaybe<StringOperationFilterInput>;
  companyName?: InputMaybe<StringOperationFilterInput>;
  contactName?: InputMaybe<StringOperationFilterInput>;
  contactTitle?: InputMaybe<StringOperationFilterInput>;
  country?: InputMaybe<StringOperationFilterInput>;
  customerId?: InputMaybe<StringOperationFilterInput>;
  demographics?: InputMaybe<ListFilterInputTypeOfCustomerDemographicFilterInput>;
  fax?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CustomerFilterInput>>;
  orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>;
  phone?: InputMaybe<StringOperationFilterInput>;
  postalCode?: InputMaybe<StringOperationFilterInput>;
  region?: InputMaybe<StringOperationFilterInput>;
};

export type CustomerSortInput = {
  address?: InputMaybe<SortEnumType>;
  city?: InputMaybe<SortEnumType>;
  companyName?: InputMaybe<SortEnumType>;
  contactName?: InputMaybe<SortEnumType>;
  contactTitle?: InputMaybe<SortEnumType>;
  country?: InputMaybe<SortEnumType>;
  customerId?: InputMaybe<SortEnumType>;
  fax?: InputMaybe<SortEnumType>;
  phone?: InputMaybe<SortEnumType>;
  postalCode?: InputMaybe<SortEnumType>;
  region?: InputMaybe<SortEnumType>;
};

export type Employee = Node & {
  __typename?: 'Employee';
  address?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['LocalDate']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  directReports: Array<Employee>;
  extension?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  hireDate?: Maybe<Scalars['LocalDate']['output']>;
  homePhone?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  manager?: Maybe<Employee>;
  notes?: Maybe<Scalars['String']['output']>;
  orders: Array<Order>;
  photo?: Maybe<Array<Scalars['Byte']['output']>>;
  photoPath?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  reportsTo?: Maybe<Scalars['Short']['output']>;
  territories: Array<Territory>;
  title?: Maybe<Scalars['String']['output']>;
  titleOfCourtesy?: Maybe<Scalars['String']['output']>;
};

export type EmployeeFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<EmployeeFilterInput>>;
  birthDate?: InputMaybe<LocalDateOperationFilterInput>;
  city?: InputMaybe<StringOperationFilterInput>;
  country?: InputMaybe<StringOperationFilterInput>;
  directReports?: InputMaybe<ListFilterInputTypeOfEmployeeFilterInput>;
  employeeId?: InputMaybe<ShortOperationFilterInput>;
  extension?: InputMaybe<StringOperationFilterInput>;
  firstName?: InputMaybe<StringOperationFilterInput>;
  hireDate?: InputMaybe<LocalDateOperationFilterInput>;
  homePhone?: InputMaybe<StringOperationFilterInput>;
  lastName?: InputMaybe<StringOperationFilterInput>;
  manager?: InputMaybe<EmployeeFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<EmployeeFilterInput>>;
  orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>;
  photo?: InputMaybe<ListByteOperationFilterInput>;
  photoPath?: InputMaybe<StringOperationFilterInput>;
  postalCode?: InputMaybe<StringOperationFilterInput>;
  region?: InputMaybe<StringOperationFilterInput>;
  reportsTo?: InputMaybe<ShortOperationFilterInput>;
  territories?: InputMaybe<ListFilterInputTypeOfTerritoryFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
  titleOfCourtesy?: InputMaybe<StringOperationFilterInput>;
};

export type EmployeeSortInput = {
  address?: InputMaybe<SortEnumType>;
  birthDate?: InputMaybe<SortEnumType>;
  city?: InputMaybe<SortEnumType>;
  country?: InputMaybe<SortEnumType>;
  employeeId?: InputMaybe<SortEnumType>;
  extension?: InputMaybe<SortEnumType>;
  firstName?: InputMaybe<SortEnumType>;
  hireDate?: InputMaybe<SortEnumType>;
  homePhone?: InputMaybe<SortEnumType>;
  lastName?: InputMaybe<SortEnumType>;
  manager?: InputMaybe<EmployeeSortInput>;
  notes?: InputMaybe<SortEnumType>;
  photoPath?: InputMaybe<SortEnumType>;
  postalCode?: InputMaybe<SortEnumType>;
  region?: InputMaybe<SortEnumType>;
  reportsTo?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
  titleOfCourtesy?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type EmployeesConnection = {
  __typename?: 'EmployeesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<EmployeesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Employee>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EmployeesEdge = {
  __typename?: 'EmployeesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Employee;
};

export type Error = {
  message: Scalars['String']['output'];
};

export type FloatOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  ngt?: InputMaybe<Scalars['Float']['input']>;
  ngte?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  nlt?: InputMaybe<Scalars['Float']['input']>;
  nlte?: InputMaybe<Scalars['Float']['input']>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListByteOperationFilterInput = {
  all?: InputMaybe<ByteOperationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ByteOperationFilterInput>;
  some?: InputMaybe<ByteOperationFilterInput>;
};

export type ListFilterInputTypeOfCustomerDemographicFilterInput = {
  all?: InputMaybe<CustomerDemographicFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<CustomerDemographicFilterInput>;
  some?: InputMaybe<CustomerDemographicFilterInput>;
};

export type ListFilterInputTypeOfCustomerFilterInput = {
  all?: InputMaybe<CustomerFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<CustomerFilterInput>;
  some?: InputMaybe<CustomerFilterInput>;
};

export type ListFilterInputTypeOfEmployeeFilterInput = {
  all?: InputMaybe<EmployeeFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<EmployeeFilterInput>;
  some?: InputMaybe<EmployeeFilterInput>;
};

export type ListFilterInputTypeOfOrderDetailFilterInput = {
  all?: InputMaybe<OrderDetailFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<OrderDetailFilterInput>;
  some?: InputMaybe<OrderDetailFilterInput>;
};

export type ListFilterInputTypeOfOrderFilterInput = {
  all?: InputMaybe<OrderFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<OrderFilterInput>;
  some?: InputMaybe<OrderFilterInput>;
};

export type ListFilterInputTypeOfProductFilterInput = {
  all?: InputMaybe<ProductFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ProductFilterInput>;
  some?: InputMaybe<ProductFilterInput>;
};

export type ListFilterInputTypeOfTerritoryFilterInput = {
  all?: InputMaybe<TerritoryFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<TerritoryFilterInput>;
  some?: InputMaybe<TerritoryFilterInput>;
};

export type LocalDateOperationFilterInput = {
  eq?: InputMaybe<Scalars['LocalDate']['input']>;
  gt?: InputMaybe<Scalars['LocalDate']['input']>;
  gte?: InputMaybe<Scalars['LocalDate']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['LocalDate']['input']>>>;
  lt?: InputMaybe<Scalars['LocalDate']['input']>;
  lte?: InputMaybe<Scalars['LocalDate']['input']>;
  neq?: InputMaybe<Scalars['LocalDate']['input']>;
  ngt?: InputMaybe<Scalars['LocalDate']['input']>;
  ngte?: InputMaybe<Scalars['LocalDate']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['LocalDate']['input']>>>;
  nlt?: InputMaybe<Scalars['LocalDate']['input']>;
  nlte?: InputMaybe<Scalars['LocalDate']['input']>;
};

/** The node interface is implemented by entities that have a global unique identifier. */
export type Node = {
  id: Scalars['ID']['output'];
};

export type Order = Node & {
  __typename?: 'Order';
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['String']['output']>;
  employee?: Maybe<Employee>;
  employeeId?: Maybe<Scalars['Short']['output']>;
  freight?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  orderDate?: Maybe<Scalars['LocalDate']['output']>;
  orderDetails: Array<OrderDetail>;
  products?: Maybe<Array<Product>>;
  requiredDate?: Maybe<Scalars['LocalDate']['output']>;
  shipAddress?: Maybe<Scalars['String']['output']>;
  shipCity?: Maybe<Scalars['String']['output']>;
  shipCountry?: Maybe<Scalars['String']['output']>;
  shipName?: Maybe<Scalars['String']['output']>;
  shipPostalCode?: Maybe<Scalars['String']['output']>;
  shipRegion?: Maybe<Scalars['String']['output']>;
  shipVia?: Maybe<Scalars['Short']['output']>;
  shippedDate?: Maybe<Scalars['LocalDate']['output']>;
  shipper?: Maybe<Shipper>;
};

export type OrderDetail = {
  __typename?: 'OrderDetail';
  discount: Scalars['Float']['output'];
  order: Order;
  orderId: Scalars['ID']['output'];
  product?: Maybe<Product>;
  productId: Scalars['ID']['output'];
  quantity: Scalars['Short']['output'];
  unitPrice: Scalars['Float']['output'];
};

export type OrderDetailFilterInput = {
  and?: InputMaybe<Array<OrderDetailFilterInput>>;
  discount?: InputMaybe<FloatOperationFilterInput>;
  or?: InputMaybe<Array<OrderDetailFilterInput>>;
  order?: InputMaybe<OrderFilterInput>;
  orderId?: InputMaybe<ShortOperationFilterInput>;
  product?: InputMaybe<ProductFilterInput>;
  productId?: InputMaybe<ShortOperationFilterInput>;
  quantity?: InputMaybe<ShortOperationFilterInput>;
  unitPrice?: InputMaybe<FloatOperationFilterInput>;
};

export type OrderFilterInput = {
  and?: InputMaybe<Array<OrderFilterInput>>;
  customer?: InputMaybe<CustomerFilterInput>;
  customerId?: InputMaybe<StringOperationFilterInput>;
  employee?: InputMaybe<EmployeeFilterInput>;
  employeeId?: InputMaybe<ShortOperationFilterInput>;
  freight?: InputMaybe<FloatOperationFilterInput>;
  or?: InputMaybe<Array<OrderFilterInput>>;
  orderDate?: InputMaybe<LocalDateOperationFilterInput>;
  orderDetails?: InputMaybe<ListFilterInputTypeOfOrderDetailFilterInput>;
  orderId?: InputMaybe<ShortOperationFilterInput>;
  requiredDate?: InputMaybe<LocalDateOperationFilterInput>;
  shipAddress?: InputMaybe<StringOperationFilterInput>;
  shipCity?: InputMaybe<StringOperationFilterInput>;
  shipCountry?: InputMaybe<StringOperationFilterInput>;
  shipName?: InputMaybe<StringOperationFilterInput>;
  shipPostalCode?: InputMaybe<StringOperationFilterInput>;
  shipRegion?: InputMaybe<StringOperationFilterInput>;
  shipVia?: InputMaybe<ShortOperationFilterInput>;
  shippedDate?: InputMaybe<LocalDateOperationFilterInput>;
  shipper?: InputMaybe<ShipperFilterInput>;
};

export type OrderSortInput = {
  customer?: InputMaybe<CustomerSortInput>;
  customerId?: InputMaybe<SortEnumType>;
  employee?: InputMaybe<EmployeeSortInput>;
  employeeId?: InputMaybe<SortEnumType>;
  freight?: InputMaybe<SortEnumType>;
  orderDate?: InputMaybe<SortEnumType>;
  orderId?: InputMaybe<SortEnumType>;
  requiredDate?: InputMaybe<SortEnumType>;
  shipAddress?: InputMaybe<SortEnumType>;
  shipCity?: InputMaybe<SortEnumType>;
  shipCountry?: InputMaybe<SortEnumType>;
  shipName?: InputMaybe<SortEnumType>;
  shipPostalCode?: InputMaybe<SortEnumType>;
  shipRegion?: InputMaybe<SortEnumType>;
  shipVia?: InputMaybe<SortEnumType>;
  shippedDate?: InputMaybe<SortEnumType>;
  shipper?: InputMaybe<ShipperSortInput>;
};

/** A connection to a list of items. */
export type OrdersConnection = {
  __typename?: 'OrdersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<OrdersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Order>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrdersEdge = {
  __typename?: 'OrdersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Order;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Product = Node & {
  __typename?: 'Product';
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['Short']['output']>;
  discontinued: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  orderDetails: Array<OrderDetail>;
  productName: Scalars['String']['output'];
  quantityPerUnit?: Maybe<Scalars['String']['output']>;
  reorderLevel?: Maybe<Scalars['Short']['output']>;
  supplier?: Maybe<Supplier>;
  supplierId?: Maybe<Scalars['Short']['output']>;
  unitPrice?: Maybe<Scalars['Float']['output']>;
  unitsInStock?: Maybe<Scalars['Short']['output']>;
  unitsOnOrder?: Maybe<Scalars['Short']['output']>;
};

export type ProductFilterInput = {
  and?: InputMaybe<Array<ProductFilterInput>>;
  category?: InputMaybe<CategoryFilterInput>;
  categoryId?: InputMaybe<ShortOperationFilterInput>;
  discontinued?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<ProductFilterInput>>;
  orderDetails?: InputMaybe<ListFilterInputTypeOfOrderDetailFilterInput>;
  productId?: InputMaybe<ShortOperationFilterInput>;
  productName?: InputMaybe<StringOperationFilterInput>;
  quantityPerUnit?: InputMaybe<StringOperationFilterInput>;
  reorderLevel?: InputMaybe<ShortOperationFilterInput>;
  supplier?: InputMaybe<SupplierFilterInput>;
  supplierId?: InputMaybe<ShortOperationFilterInput>;
  unitPrice?: InputMaybe<FloatOperationFilterInput>;
  unitsInStock?: InputMaybe<ShortOperationFilterInput>;
  unitsOnOrder?: InputMaybe<ShortOperationFilterInput>;
};

export type ProductSortInput = {
  category?: InputMaybe<CategorySortInput>;
  categoryId?: InputMaybe<SortEnumType>;
  discontinued?: InputMaybe<SortEnumType>;
  productId?: InputMaybe<SortEnumType>;
  productName?: InputMaybe<SortEnumType>;
  quantityPerUnit?: InputMaybe<SortEnumType>;
  reorderLevel?: InputMaybe<SortEnumType>;
  supplier?: InputMaybe<SupplierSortInput>;
  supplierId?: InputMaybe<SortEnumType>;
  unitPrice?: InputMaybe<SortEnumType>;
  unitsInStock?: InputMaybe<SortEnumType>;
  unitsOnOrder?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Product>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductsEdge = {
  __typename?: 'ProductsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Product;
};

export type Query = {
  __typename?: 'Query';
  employees?: Maybe<EmployeesConnection>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Lookup nodes by a list of IDs. */
  nodes: Array<Maybe<Node>>;
  orders?: Maybe<OrdersConnection>;
  products?: Maybe<ProductsConnection>;
};


export type QueryEmployeesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<EmployeeSortInput>>;
  where?: InputMaybe<EmployeeFilterInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderSortInput>>;
  where?: InputMaybe<OrderFilterInput>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductSortInput>>;
  where?: InputMaybe<ProductFilterInput>;
};

export type Region = {
  __typename?: 'Region';
  regionDescription: Scalars['String']['output'];
  regionId: Scalars['Short']['output'];
  territories: Array<Territory>;
};

export type RegionFilterInput = {
  and?: InputMaybe<Array<RegionFilterInput>>;
  or?: InputMaybe<Array<RegionFilterInput>>;
  regionDescription?: InputMaybe<StringOperationFilterInput>;
  regionId?: InputMaybe<ShortOperationFilterInput>;
  territories?: InputMaybe<ListFilterInputTypeOfTerritoryFilterInput>;
};

export type Shipper = Node & {
  __typename?: 'Shipper';
  companyName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  orders: Array<Order>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type ShipperFilterInput = {
  and?: InputMaybe<Array<ShipperFilterInput>>;
  companyName?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ShipperFilterInput>>;
  orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>;
  phone?: InputMaybe<StringOperationFilterInput>;
  shipperId?: InputMaybe<ShortOperationFilterInput>;
};

export type ShipperSortInput = {
  companyName?: InputMaybe<SortEnumType>;
  phone?: InputMaybe<SortEnumType>;
  shipperId?: InputMaybe<SortEnumType>;
};

export type ShortOperationFilterInput = {
  eq?: InputMaybe<Scalars['Short']['input']>;
  gt?: InputMaybe<Scalars['Short']['input']>;
  gte?: InputMaybe<Scalars['Short']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  lt?: InputMaybe<Scalars['Short']['input']>;
  lte?: InputMaybe<Scalars['Short']['input']>;
  neq?: InputMaybe<Scalars['Short']['input']>;
  ngt?: InputMaybe<Scalars['Short']['input']>;
  ngte?: InputMaybe<Scalars['Short']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  nlt?: InputMaybe<Scalars['Short']['input']>;
  nlte?: InputMaybe<Scalars['Short']['input']>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Supplier = Node & {
  __typename?: 'Supplier';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  companyName: Scalars['String']['output'];
  contactName?: Maybe<Scalars['String']['output']>;
  contactTitle?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  homepage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  products: Array<Product>;
  region?: Maybe<Scalars['String']['output']>;
};

export type SupplierFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<SupplierFilterInput>>;
  city?: InputMaybe<StringOperationFilterInput>;
  companyName?: InputMaybe<StringOperationFilterInput>;
  contactName?: InputMaybe<StringOperationFilterInput>;
  contactTitle?: InputMaybe<StringOperationFilterInput>;
  country?: InputMaybe<StringOperationFilterInput>;
  fax?: InputMaybe<StringOperationFilterInput>;
  homepage?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SupplierFilterInput>>;
  phone?: InputMaybe<StringOperationFilterInput>;
  postalCode?: InputMaybe<StringOperationFilterInput>;
  products?: InputMaybe<ListFilterInputTypeOfProductFilterInput>;
  region?: InputMaybe<StringOperationFilterInput>;
  supplierId?: InputMaybe<ShortOperationFilterInput>;
};

export type SupplierSortInput = {
  address?: InputMaybe<SortEnumType>;
  city?: InputMaybe<SortEnumType>;
  companyName?: InputMaybe<SortEnumType>;
  contactName?: InputMaybe<SortEnumType>;
  contactTitle?: InputMaybe<SortEnumType>;
  country?: InputMaybe<SortEnumType>;
  fax?: InputMaybe<SortEnumType>;
  homepage?: InputMaybe<SortEnumType>;
  phone?: InputMaybe<SortEnumType>;
  postalCode?: InputMaybe<SortEnumType>;
  region?: InputMaybe<SortEnumType>;
  supplierId?: InputMaybe<SortEnumType>;
};

export type Territory = {
  __typename?: 'Territory';
  employees: Array<Employee>;
  region: Region;
  regionId: Scalars['Short']['output'];
  territoryDescription: Scalars['String']['output'];
  territoryId: Scalars['String']['output'];
};

export type TerritoryFilterInput = {
  and?: InputMaybe<Array<TerritoryFilterInput>>;
  employees?: InputMaybe<ListFilterInputTypeOfEmployeeFilterInput>;
  or?: InputMaybe<Array<TerritoryFilterInput>>;
  region?: InputMaybe<RegionFilterInput>;
  regionId?: InputMaybe<ShortOperationFilterInput>;
  territoryDescription?: InputMaybe<StringOperationFilterInput>;
  territoryId?: InputMaybe<StringOperationFilterInput>;
};

export type GetOrdersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetOrdersQuery = { __typename?: 'Query', orders?: { __typename?: 'OrdersConnection', nodes?: Array<{ __typename?: 'Order', id: string, shipName?: string | null, shipAddress?: string | null }> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null };
