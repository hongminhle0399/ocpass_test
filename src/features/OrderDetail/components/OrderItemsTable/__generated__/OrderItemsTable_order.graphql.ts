/**
 * @generated SignedSource<<99879fc629c46183e5cda1c04922c676>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderItemsTable_order$data = {
  readonly orderDetails: ReadonlyArray<{
    readonly discount: number;
    readonly product: {
      readonly productName: string;
      readonly quantityPerUnit: string | null | undefined;
      readonly unitPrice: number | null | undefined;
    } | null | undefined;
    readonly quantity: any;
    readonly unitPrice: number;
  }>;
  readonly " $fragmentType": "OrderItemsTable_order";
};
export type OrderItemsTable_order$key = {
  readonly " $data"?: OrderItemsTable_order$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrderItemsTable_order">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "unitPrice",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrderItemsTable_order",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderDetail",
      "kind": "LinkedField",
      "name": "orderDetails",
      "plural": true,
      "selections": [
        (v0/*: any*/),
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
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Order",
  "abstractKey": null
};
})();

(node as any).hash = "fc9c2373aa71b15f3f5836b48a3e4d4e";

export default node;
