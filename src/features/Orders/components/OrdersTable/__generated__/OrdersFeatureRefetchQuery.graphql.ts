/**
 * @generated SignedSource<<8af0777721e6a105a496386e6942148b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SortEnumType = "ASC" | "DESC" | "%future added value";
export type OrderSortInput = {
  customer?: CustomerSortInput | null | undefined;
  customerId?: SortEnumType | null | undefined;
  employee?: EmployeeSortInput | null | undefined;
  employeeId?: SortEnumType | null | undefined;
  freight?: SortEnumType | null | undefined;
  orderDate?: SortEnumType | null | undefined;
  orderId?: SortEnumType | null | undefined;
  requiredDate?: SortEnumType | null | undefined;
  shipAddress?: SortEnumType | null | undefined;
  shipCity?: SortEnumType | null | undefined;
  shipCountry?: SortEnumType | null | undefined;
  shipName?: SortEnumType | null | undefined;
  shipPostalCode?: SortEnumType | null | undefined;
  shipRegion?: SortEnumType | null | undefined;
  shipVia?: SortEnumType | null | undefined;
  shippedDate?: SortEnumType | null | undefined;
  shipper?: ShipperSortInput | null | undefined;
};
export type CustomerSortInput = {
  address?: SortEnumType | null | undefined;
  city?: SortEnumType | null | undefined;
  companyName?: SortEnumType | null | undefined;
  contactName?: SortEnumType | null | undefined;
  contactTitle?: SortEnumType | null | undefined;
  country?: SortEnumType | null | undefined;
  customerId?: SortEnumType | null | undefined;
  fax?: SortEnumType | null | undefined;
  phone?: SortEnumType | null | undefined;
  postalCode?: SortEnumType | null | undefined;
  region?: SortEnumType | null | undefined;
};
export type EmployeeSortInput = {
  address?: SortEnumType | null | undefined;
  birthDate?: SortEnumType | null | undefined;
  city?: SortEnumType | null | undefined;
  country?: SortEnumType | null | undefined;
  employeeId?: SortEnumType | null | undefined;
  extension?: SortEnumType | null | undefined;
  firstName?: SortEnumType | null | undefined;
  hireDate?: SortEnumType | null | undefined;
  homePhone?: SortEnumType | null | undefined;
  lastName?: SortEnumType | null | undefined;
  manager?: EmployeeSortInput | null | undefined;
  notes?: SortEnumType | null | undefined;
  photoPath?: SortEnumType | null | undefined;
  postalCode?: SortEnumType | null | undefined;
  region?: SortEnumType | null | undefined;
  reportsTo?: SortEnumType | null | undefined;
  title?: SortEnumType | null | undefined;
  titleOfCourtesy?: SortEnumType | null | undefined;
};
export type ShipperSortInput = {
  companyName?: SortEnumType | null | undefined;
  phone?: SortEnumType | null | undefined;
  shipperId?: SortEnumType | null | undefined;
};
export type OrdersFeatureRefetchQuery$variables = {
  count?: number | null | undefined;
  cursor?: string | null | undefined;
  order?: ReadonlyArray<OrderSortInput> | null | undefined;
};
export type OrdersFeatureRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"OrdersTable_query">;
};
export type OrdersFeatureRefetchQuery = {
  response: OrdersFeatureRefetchQuery$data;
  variables: OrdersFeatureRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "order"
  }
],
v1 = {
  "kind": "Variable",
  "name": "order",
  "variableName": "order"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OrdersFeatureRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "OrdersTable_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrdersFeatureRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count"
          },
          (v1/*: any*/)
        ],
        "concreteType": "OrdersConnection",
        "kind": "LinkedField",
        "name": "orders",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "OrdersEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Order",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "shipName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "shipAddress",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Customer",
                    "kind": "LinkedField",
                    "name": "customer",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "contactName",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "phone",
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "shippedDate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "orderDate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "shipVia",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "shipRegion",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "shipCountry",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "02334aa15dc473df33ff255afb29aada",
    "id": null,
    "metadata": {},
    "name": "OrdersFeatureRefetchQuery",
    "operationKind": "query",
    "text": "query OrdersFeatureRefetchQuery(\n  $count: Int = 10\n  $cursor: String\n  $order: [OrderSortInput!]\n) {\n  ...OrdersTable_query_2kH0K8\n}\n\nfragment OrdersTable_query_2kH0K8 on Query {\n  orders(first: $count, after: $cursor, order: $order) {\n    edges {\n      node {\n        id\n        shipName\n        shipAddress\n        customer {\n          contactName\n          phone\n          id\n        }\n        shippedDate\n        orderDate\n        shipVia\n        shipRegion\n        shipCountry\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      endCursor\n      startCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cbaac6e36ae488bb005369878f3b27d4";

export default node;
