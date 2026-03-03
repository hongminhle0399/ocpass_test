/**
 * @generated SignedSource<<ceee35081fd961ccbde5db95505c4d71>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type OrdersFeatureQuery$variables = Record<PropertyKey, never>;
export type OrdersFeatureQuery$data = {
  readonly orders: {
    readonly nodes: ReadonlyArray<{
      readonly customer: {
        readonly contactName: string | null | undefined;
        readonly phone: string | null | undefined;
      } | null | undefined;
      readonly customerId: string | null | undefined;
      readonly freight: number | null | undefined;
      readonly id: string;
      readonly orderDate: any | null | undefined;
      readonly shipCountry: string | null | undefined;
      readonly shipVia: any | null | undefined;
      readonly shippedDate: any | null | undefined;
    }> | null | undefined;
  } | null | undefined;
};
export type OrdersFeatureQuery = {
  response: OrdersFeatureQuery$data;
  variables: OrdersFeatureQuery$variables;
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
  "name": "orderDate",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shipCountry",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shipVia",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "freight",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shippedDate",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "customerId",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contactName",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phone",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OrdersFeatureQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "OrdersConnection",
        "kind": "LinkedField",
        "name": "orders",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Order",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Customer",
                "kind": "LinkedField",
                "name": "customer",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OrdersFeatureQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "OrdersConnection",
        "kind": "LinkedField",
        "name": "orders",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Order",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Customer",
                "kind": "LinkedField",
                "name": "customer",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v0/*: any*/)
                ],
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
    "cacheID": "d8c5f058cb28333a26b4ed47984c6996",
    "id": null,
    "metadata": {},
    "name": "OrdersFeatureQuery",
    "operationKind": "query",
    "text": "query OrdersFeatureQuery {\n  orders {\n    nodes {\n      id\n      orderDate\n      shipCountry\n      shipVia\n      freight\n      shippedDate\n      customerId\n      customer {\n        contactName\n        phone\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8c20481fc0bda43b152af193a531cfd7";

export default node;
