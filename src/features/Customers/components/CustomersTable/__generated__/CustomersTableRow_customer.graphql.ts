/**
 * @generated SignedSource<<34b19bfa25af19908ba6b8fedc169f49>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CustomersTableRow_customer$data = {
  readonly city: string | null | undefined;
  readonly companyName: string;
  readonly contactName: string | null | undefined;
  readonly country: string | null | undefined;
  readonly fax: string | null | undefined;
  readonly id: string;
  readonly orders: ReadonlyArray<{
    readonly freight: number | null | undefined;
    readonly id: string;
    readonly orderDate: any | null | undefined;
    readonly shipper: {
      readonly companyName: string;
    } | null | undefined;
  }>;
  readonly " $fragmentType": "CustomersTableRow_customer";
};
export type CustomersTableRow_customer$key = {
  readonly " $data"?: CustomersTableRow_customer$data;
  readonly " $fragmentSpreads": FragmentRefs<"CustomersTableRow_customer">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "companyName",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CustomersTableRow_customer",
  "selections": [
    (v0/*: any*/),
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
      "name": "city",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fax",
      "storageKey": null
    },
    (v1/*: any*/),
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
      "concreteType": "Order",
      "kind": "LinkedField",
      "name": "orders",
      "plural": true,
      "selections": [
        (v0/*: any*/),
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
          "concreteType": "Shipper",
          "kind": "LinkedField",
          "name": "shipper",
          "plural": false,
          "selections": [
            (v1/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "freight",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Customer",
  "abstractKey": null
};
})();

(node as any).hash = "cfb568b79198dbe873d2dba209ffd5d4";

export default node;
