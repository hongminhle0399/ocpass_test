/**
 * @generated SignedSource<<70345b1a6f27403e5f22ac384c3428f9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CustomerContactCard_customer$data = {
  readonly address: string | null | undefined;
  readonly city: string | null | undefined;
  readonly country: string | null | undefined;
  readonly fax: string | null | undefined;
  readonly phone: string | null | undefined;
  readonly postalCode: string | null | undefined;
  readonly region: string | null | undefined;
  readonly " $fragmentType": "CustomerContactCard_customer";
};
export type CustomerContactCard_customer$key = {
  readonly " $data"?: CustomerContactCard_customer$data;
  readonly " $fragmentSpreads": FragmentRefs<"CustomerContactCard_customer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CustomerContactCard_customer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address",
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
      "name": "region",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "postalCode",
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
      "name": "phone",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fax",
      "storageKey": null
    }
  ],
  "type": "Customer",
  "abstractKey": null
};

(node as any).hash = "6cb8d6fdeca903f224b82cdb103c4855";

export default node;
