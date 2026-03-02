import { gql } from "./__generated__";

export const CUTOMER_INFO = gql(`
fragment CustomerFields on Customer {
  id
  contactName
  contactTitle
  phone
  city
  country
  address
  postalCode
  companyName
}
`);
