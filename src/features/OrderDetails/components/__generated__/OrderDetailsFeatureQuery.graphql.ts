/**
 * @generated SignedSource<<f9d1b5eb2a2cb83962cfede52ee2bf76>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDetailsFeatureQuery$variables = {
  id: string;
};
export type OrderDetailsFeatureQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"OrderDetailHero_order" | "OrderEmployee_order" | "OrderItemsTable_order" | "OrderShippingInfo_order">;
  } | null | undefined;
};
export type OrderDetailsFeatureQuery = {
  response: OrderDetailsFeatureQuery$data;
  variables: OrderDetailsFeatureQuery$variables;
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "unitPrice",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OrderDetailsFeatureQuery",
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
                "name": "OrderDetailHero_order"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "OrderShippingInfo_order"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "OrderItemsTable_order"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "OrderEmployee_order"
              }
            ],
            "type": "Order",
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
    "name": "OrderDetailsFeatureQuery",
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
                "name": "requiredDate",
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
                "kind": "ScalarField",
                "name": "shipCity",
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
                "name": "shipPostalCode",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "shipCountry",
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
                "concreteType": "OrderDetail",
                "kind": "LinkedField",
                "name": "orderDetails",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "quantity",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "discount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Product",
                    "kind": "LinkedField",
                    "name": "product",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "productName",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "quantityPerUnit",
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Employee",
                "kind": "LinkedField",
                "name": "employee",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "firstName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "lastName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
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
                    "name": "country",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "homePhone",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "Order",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3ac70a879c873c34dfeabf47dc192627",
    "id": null,
    "metadata": {},
    "name": "OrderDetailsFeatureQuery",
    "operationKind": "query",
    "text": "query OrderDetailsFeatureQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Order {\n      ...OrderDetailHero_order\n      ...OrderShippingInfo_order\n      ...OrderItemsTable_order\n      ...OrderEmployee_order\n    }\n    id\n  }\n}\n\nfragment OrderDetailHero_order on Order {\n  id\n  orderDate\n  shippedDate\n  requiredDate\n  freight\n  shipName\n}\n\nfragment OrderEmployee_order on Order {\n  employee {\n    firstName\n    lastName\n    title\n    city\n    country\n    homePhone\n    id\n  }\n}\n\nfragment OrderItemsTable_order on Order {\n  orderDetails {\n    unitPrice\n    quantity\n    discount\n    product {\n      productName\n      quantityPerUnit\n      unitPrice\n      id\n    }\n  }\n}\n\nfragment OrderShippingInfo_order on Order {\n  shipName\n  shipAddress\n  shipCity\n  shipRegion\n  shipPostalCode\n  shipCountry\n  freight\n  shipper {\n    companyName\n    phone\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b3c6fe8584ee2e109edfb631686f94c0";

export default node;
