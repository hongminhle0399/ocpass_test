/**
 * @generated SignedSource<<834aacad38579bb4d0c58f5b135cea88>>
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
  readonly " $fragmentType": "CustomersTableRow_customer";
};
export type CustomersTableRow_customer$key = {
  readonly " $data"?: CustomersTableRow_customer$data;
  readonly " $fragmentSpreads": FragmentRefs<"CustomersTableRow_customer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CustomersTableRow_customer",
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
      "name": "country",
      "storageKey": null
    }
  ],
  "type": "Customer",
  "abstractKey": null
};

(node as any).hash = "652f5004ce3d09288143a83c8d9bd385";

export default node;
