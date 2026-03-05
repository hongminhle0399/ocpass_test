/**
 * @generated SignedSource<<2cf9c0a9281889dda9ca15e252f9804a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CustomerProfileHero_customer$data = {
  readonly companyName: string;
  readonly contactName: string | null | undefined;
  readonly contactTitle: string | null | undefined;
  readonly id: string;
  readonly " $fragmentType": "CustomerProfileHero_customer";
};
export type CustomerProfileHero_customer$key = {
  readonly " $data"?: CustomerProfileHero_customer$data;
  readonly " $fragmentSpreads": FragmentRefs<"CustomerProfileHero_customer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CustomerProfileHero_customer",
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
    }
  ],
  "type": "Customer",
  "abstractKey": null
};

(node as any).hash = "ebd88eb659b848826ac832eee381c985";

export default node;
