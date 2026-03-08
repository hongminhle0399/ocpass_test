/**
 * @generated SignedSource<<dcfe899e5945478ff8a659ca410b4e72>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CustomersFeatureRefetchQuery$variables = {
  count?: number | null | undefined;
  cursor?: string | null | undefined;
};
export type CustomersFeatureRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CustomersTable_query">;
};
export type CustomersFeatureRefetchQuery = {
  response: CustomersFeatureRefetchQuery$data;
  variables: CustomersFeatureRefetchQuery$variables;
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
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "companyName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CustomersFeatureRefetchQuery",
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
          }
        ],
        "kind": "FragmentSpread",
        "name": "CustomersTable_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CustomersFeatureRefetchQuery",
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
          }
        ],
        "concreteType": "CustomersConnection",
        "kind": "LinkedField",
        "name": "customers",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CustomersEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Customer",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
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
                    "name": "city",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fax",
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "country",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Order",
                    "kind": "LinkedField",
                    "name": "orders",
                    "plural": true,
                    "selections": [
                      (v1/*: any*/),
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
                        "concreteType": "Shipper",
                        "kind": "LinkedField",
                        "name": "shipper",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v1/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "freight",
                        "storageKey": null
                      }
                    ],
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
    "cacheID": "64783e91020ac14151ff9f69bcfe38c3",
    "id": null,
    "metadata": {},
    "name": "CustomersFeatureRefetchQuery",
    "operationKind": "query",
    "text": "query CustomersFeatureRefetchQuery(\n  $count: Int = 10\n  $cursor: String\n) {\n  ...CustomersTable_query_1G22uz\n}\n\nfragment CustomersTable_query_1G22uz on Query {\n  customers(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        contactName\n        city\n        fax\n        companyName\n        country\n        orders {\n          id\n          orderDate\n          shipper {\n            companyName\n            id\n          }\n          freight\n        }\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      endCursor\n      startCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "af867dcfd51c95cc53cdda1978d620e9";

export default node;
