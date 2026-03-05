/**
 * @generated SignedSource<<fbb8854c20372df55d94950e336759a7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrdersTableRow_order$data = {
  readonly customer: {
    readonly contactName: string | null | undefined;
    readonly phone: string | null | undefined;
  } | null | undefined;
  readonly freight: number | null | undefined;
  readonly id: string;
  readonly orderDate: any | null | undefined;
  readonly shipAddress: string | null | undefined;
  readonly shipName: string | null | undefined;
  readonly shippedDate: any | null | undefined;
  readonly " $fragmentType": "OrdersTableRow_order";
};
export type OrdersTableRow_order$key = {
  readonly " $data"?: OrdersTableRow_order$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrdersTableRow_order">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrdersTableRow_order",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
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
        }
      ],
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
      "name": "shippedDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "orderDate",
      "storageKey": null
    }
  ],
  "type": "Order",
  "abstractKey": null
};

(node as any).hash = "9cefa4ea402446abaab5ad3aa2f99457";

export default node;
