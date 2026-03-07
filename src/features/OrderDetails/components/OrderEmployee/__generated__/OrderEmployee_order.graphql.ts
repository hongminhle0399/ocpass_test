/**
 * @generated SignedSource<<8a5236795bfd3e8c36d1138a47b3c76a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderEmployee_order$data = {
  readonly employee: {
    readonly city: string | null | undefined;
    readonly country: string | null | undefined;
    readonly firstName: string;
    readonly homePhone: string | null | undefined;
    readonly lastName: string;
    readonly title: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "OrderEmployee_order";
};
export type OrderEmployee_order$key = {
  readonly " $data"?: OrderEmployee_order$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrderEmployee_order">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrderEmployee_order",
  "selections": [
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Order",
  "abstractKey": null
};

(node as any).hash = "659254f11d5d3117446541f0954ef6db";

export default node;
