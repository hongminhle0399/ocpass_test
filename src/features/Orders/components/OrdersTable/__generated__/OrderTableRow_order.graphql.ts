/**
 * @generated SignedSource<<75b015f61ecc7aa6d9b4d29c3a8948bb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderTableRow_order$data = {
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
  readonly " $fragmentType": "OrderTableRow_order";
};
export type OrderTableRow_order$key = {
  readonly " $data"?: OrderTableRow_order$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrderTableRow_order">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrderTableRow_order",
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

(node as any).hash = "e6b7eaf381936cc29b86451c30786059";

export default node;
