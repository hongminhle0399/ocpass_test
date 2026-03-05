/**
 * @generated SignedSource<<5d5f019d7e7ffb05b8b67edb08a7f6aa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderShippingInfo_order$data = {
  readonly freight: number | null | undefined;
  readonly shipAddress: string | null | undefined;
  readonly shipCity: string | null | undefined;
  readonly shipCountry: string | null | undefined;
  readonly shipName: string | null | undefined;
  readonly shipPostalCode: string | null | undefined;
  readonly shipRegion: string | null | undefined;
  readonly shipper: {
    readonly companyName: string;
    readonly phone: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "OrderShippingInfo_order";
};
export type OrderShippingInfo_order$key = {
  readonly " $data"?: OrderShippingInfo_order$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrderShippingInfo_order">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrderShippingInfo_order",
  "selections": [
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
      "kind": "ScalarField",
      "name": "freight",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Order",
  "abstractKey": null
};

(node as any).hash = "b5b22a05696d09e3ce57df779e084bb1";

export default node;
