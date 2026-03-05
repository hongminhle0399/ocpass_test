/**
 * @generated SignedSource<<5b15ebeec797c133ee6a3ba0b6c2115b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDetailHero_order$data = {
  readonly freight: number | null | undefined;
  readonly id: string;
  readonly orderDate: any | null | undefined;
  readonly requiredDate: any | null | undefined;
  readonly shipName: string | null | undefined;
  readonly shippedDate: any | null | undefined;
  readonly " $fragmentType": "OrderDetailHero_order";
};
export type OrderDetailHero_order$key = {
  readonly " $data"?: OrderDetailHero_order$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrderDetailHero_order">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrderDetailHero_order",
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
    }
  ],
  "type": "Order",
  "abstractKey": null
};

(node as any).hash = "a2729520ac547321d4534609821f31e8";

export default node;
