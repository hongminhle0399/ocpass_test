/**
 * @generated SignedSource<<1997201700a16eb60d396fee96396e52>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CustomersFeatureQuery$variables = Record<PropertyKey, never>;
export type CustomersFeatureQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CustomersTable_query">;
};
export type CustomersFeatureQuery = {
  response: CustomersFeatureQuery$data;
  variables: CustomersFeatureQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "companyName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CustomersFeatureQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CustomersTable_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CustomersFeatureQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10
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
                  (v0/*: any*/),
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
                  (v1/*: any*/),
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
                      (v0/*: any*/),
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
                          (v1/*: any*/),
                          (v0/*: any*/)
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
        "storageKey": "customers(first:10)"
      }
    ]
  },
  "params": {
    "cacheID": "50fbeb7a58a39e848df5e1d3cb0fdf80",
    "id": null,
    "metadata": {},
    "name": "CustomersFeatureQuery",
    "operationKind": "query",
    "text": "query CustomersFeatureQuery {\n  ...CustomersTable_query\n}\n\nfragment CustomersTable_query on Query {\n  customers(first: 10) {\n    edges {\n      node {\n        id\n        contactName\n        city\n        fax\n        companyName\n        country\n        orders {\n          id\n          orderDate\n          shipper {\n            companyName\n            id\n          }\n          freight\n        }\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      endCursor\n      startCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b5026d0488d391714fc2aea34a3fa229";

export default node;
