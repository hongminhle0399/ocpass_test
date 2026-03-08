import { graphql, useFragment } from "react-relay";
import type { CustomerContactCard_customer$key } from "./__generated__/CustomerContactCard_customer.graphql";
import { DetailSection, DetailInfoRow } from "@/shared/ui";

const customerContactCardFragment = graphql`
  fragment CustomerContactCard_customer on Customer {
    address
    city
    region
    postalCode
    country
    phone
    fax
  }
`;

interface CustomerContactCardProps {
    customer: CustomerContactCard_customer$key;
}

export const CustomerContactCard = ({ customer }: CustomerContactCardProps) => {
    const data = useFragment(customerContactCardFragment, customer);

    const addressString = [
        data.address,
        data.city,
        data.region,
        data.postalCode,
        data.country,
    ]
        .filter(Boolean)
        .join(", ");

    return (
        <DetailSection title="Contact Information">
            <DetailInfoRow label="Phone" value={data.phone} mono />
            <DetailInfoRow label="Fax" value={data.fax} mono />
            <DetailInfoRow label="Address" value={addressString} />
        </DetailSection>
    );
};
