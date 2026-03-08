/**
 * @generated SignedSource<<ac8a43a35ff8432c218a3dd5c5346f9f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CustomerOrdersTable_customer$data = {
  readonly orders: ReadonlyArray<{
    readonly freight: number | null | undefined;
    readonly id: string;
    readonly orderDate: any | null | undefined;
    readonly shipName: string | null | undefined;
    readonly shippedDate: any | null | undefined;
  }>;
  readonly " $fragmentType": "CustomerOrdersTable_customer";
};
export type CustomerOrdersTable_customer$key = {
  readonly " $data"?: CustomerOrdersTable_customer$data;
  readonly " $fragmentSpreads": FragmentRefs<"CustomerOrdersTable_customer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CustomerOrdersTable_customer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Order",
      "kind": "LinkedField",
      "name": "orders",
      "plural": true,
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
};

(node as any).hash = "c6984c948096786d684ce61f7e11d449";

export default node;
