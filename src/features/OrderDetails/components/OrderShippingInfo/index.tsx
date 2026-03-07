import { graphql, useFragment } from "react-relay";
import type { OrderShippingInfo_order$key } from "./__generated__/OrderShippingInfo_order.graphql";
import { DetailSection, DetailInfoRow } from "@/shared/ui";
import { MapPinIcon } from "@heroicons/react/24/outline";

const orderShippingInfoFragment = graphql`
  fragment OrderShippingInfo_order on Order {
    shipName
    shipAddress
    shipCity
    shipRegion
    shipPostalCode
    shipCountry
    freight
    shipper {
      companyName
      phone
    }
  }
`;

interface OrderShippingInfoProps {
    order: OrderShippingInfo_order$key;
}

export const OrderShippingInfo = ({ order }: OrderShippingInfoProps) => {
    const data = useFragment(orderShippingInfoFragment, order);

    const addressParts = [
        data.shipAddress,
        data.shipCity,
        data.shipRegion,
        data.shipPostalCode,
        data.shipCountry,
    ]
        .filter(Boolean)
        .join(", ");

    return (
        <DetailSection title="Shipping Information">
            <div className="flex items-start gap-3 mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                        {data.shipName || "—"}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                        {addressParts || "—"}
                    </p>
                </div>
            </div>

            <DetailInfoRow label="Freight" value={data.freight != null ? `$${data.freight.toFixed(2)}` : null} />
            {data.shipper && (
                <>
                    <DetailInfoRow label="Carrier" value={data.shipper.companyName} />
                    <DetailInfoRow label="Carrier Phone" value={data.shipper.phone} mono />
                </>
            )}
        </DetailSection>
    );
};
