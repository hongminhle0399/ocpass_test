/**
 * @generated SignedSource<<1c3a6cc612e8a474e07c86dcbd2e380d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDetailFeatureQuery$variables = {
  id: string;
};
export type OrderDetailFeatureQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"OrderCustomerInfo_order" | "OrderDetailHero_order" | "OrderEmployee_order" | "OrderItemsTable_order" | "OrderShippingInfo_order">;
  } | null | undefined;
};
export type OrderDetailFeatureQuery = {
  response: OrderDetailFeatureQuery$data;
  variables: OrderDetailFeatureQuery$variables;
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
  "name": "companyName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phone",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "city",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "country",
  "storageKey": null
},
v7 = {
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
    "name": "OrderDetailFeatureQuery",
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
                "name": "OrderCustomerInfo_order"
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
    "name": "OrderDetailFeatureQuery",
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
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "customerId",
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
                  (v2/*: any*/),
                  (v3/*: any*/),
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/)
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
                  (v7/*: any*/),
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
                      (v7/*: any*/),
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
                  (v5/*: any*/),
                  (v6/*: any*/),
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
    "cacheID": "4ff655beac0130b64f0b1f43a46d7c6a",
    "id": null,
    "metadata": {},
    "name": "OrderDetailFeatureQuery",
    "operationKind": "query",
    "text": "query OrderDetailFeatureQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Order {\n      ...OrderDetailHero_order\n      ...OrderShippingInfo_order\n      ...OrderCustomerInfo_order\n      ...OrderItemsTable_order\n      ...OrderEmployee_order\n    }\n    id\n  }\n}\n\nfragment OrderCustomerInfo_order on Order {\n  customerId\n  customer {\n    id\n    companyName\n    contactName\n    contactTitle\n    phone\n    city\n    country\n  }\n}\n\nfragment OrderDetailHero_order on Order {\n  id\n  orderDate\n  shippedDate\n  requiredDate\n  freight\n  shipName\n}\n\nfragment OrderEmployee_order on Order {\n  employee {\n    firstName\n    lastName\n    title\n    city\n    country\n    homePhone\n    id\n  }\n}\n\nfragment OrderItemsTable_order on Order {\n  orderDetails {\n    unitPrice\n    quantity\n    discount\n    product {\n      productName\n      quantityPerUnit\n      unitPrice\n      id\n    }\n  }\n}\n\nfragment OrderShippingInfo_order on Order {\n  shipName\n  shipAddress\n  shipCity\n  shipRegion\n  shipPostalCode\n  shipCountry\n  freight\n  shipper {\n    companyName\n    phone\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1b5810f97031e87ec87b8b4bb1e1c76e";

export default node;
