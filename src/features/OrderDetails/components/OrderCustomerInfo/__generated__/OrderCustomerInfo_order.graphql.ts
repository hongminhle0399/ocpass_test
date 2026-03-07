/**
 * @generated SignedSource<<fccc077fec4fc980ffcdfb2a08897b8d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderCustomerInfo_order$data = {
  readonly customer: {
    readonly city: string | null | undefined;
    readonly companyName: string;
    readonly contactName: string | null | undefined;
    readonly contactTitle: string | null | undefined;
    readonly country: string | null | undefined;
    readonly id: string;
    readonly phone: string | null | undefined;
  } | null | undefined;
  readonly customerId: string | null | undefined;
  readonly " $fragmentType": "OrderCustomerInfo_order";
};
export type OrderCustomerInfo_order$key = {
  readonly " $data"?: OrderCustomerInfo_order$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrderCustomerInfo_order">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrderCustomerInfo_order",
  "selections": [
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
          "name": "phone",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Order",
  "abstractKey": null
};

(node as any).hash = "7ccc792e45694ba32e2168d3fc94d9ed";

export default node;
