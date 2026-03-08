/**
 * @generated SignedSource<<edf48783aac1f58332157104a7bf2683>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CustomerDetailsFeatureQuery$variables = {
  id: string;
};
export type CustomerDetailsFeatureQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"CustomerContactCard_customer" | "CustomerOrdersTable_customer" | "CustomerProfileHero_customer">;
  } | null | undefined;
};
export type CustomerDetailsFeatureQuery = {
  response: CustomerDetailsFeatureQuery$data;
  variables: CustomerDetailsFeatureQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
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
    "name": "CustomerDetailsFeatureQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CustomerProfileHero_customer"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CustomerContactCard_customer"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CustomerOrdersTable_customer"
              }
            ],
            "type": "Customer",
            "abstractKey": null
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CustomerDetailsFeatureQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "companyName",
                "storageKey": null
              },
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
                "name": "contactTitle",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "address",
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
                "name": "region",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "postalCode",
                "storageKey": null
              },
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
                "kind": "ScalarField",
                "name": "phone",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fax",
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
                  (v2/*: any*/),
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
                    "name": "shippedDate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "freight",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "shipName",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Customer",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a1f9dac699ba8d1214a03ec5ea5b20ab",
    "id": null,
    "metadata": {},
    "name": "CustomerDetailsFeatureQuery",
    "operationKind": "query",
    "text": "query CustomerDetailsFeatureQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Customer {\n      ...CustomerProfileHero_customer\n      ...CustomerContactCard_customer\n      ...CustomerOrdersTable_customer\n    }\n    id\n  }\n}\n\nfragment CustomerContactCard_customer on Customer {\n  address\n  city\n  region\n  postalCode\n  country\n  phone\n  fax\n}\n\nfragment CustomerOrdersTable_customer on Customer {\n  orders {\n    id\n    orderDate\n    shippedDate\n    freight\n    shipName\n  }\n}\n\nfragment CustomerProfileHero_customer on Customer {\n  id\n  companyName\n  contactName\n  contactTitle\n}\n"
  }
};
})();

(node as any).hash = "0e2c6ba8c919ef6790a6f7ae4b97837b";

export default node;
