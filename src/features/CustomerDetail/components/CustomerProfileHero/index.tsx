import { graphql, useFragment } from "react-relay";
import type { CustomerProfileHero_customer$key } from "./__generated__/CustomerProfileHero_customer.graphql";
import { BackButton } from "@/shared/ui";
import { Avatar } from "@heroui/react";

const customerProfileHeroFragment = graphql`
  fragment CustomerProfileHero_customer on Customer {
    id
    companyName
    contactName
    contactTitle
  }
`;

interface CustomerProfileHeroProps {
    customer: CustomerProfileHero_customer$key;
}

export const CustomerProfileHero = ({ customer }: CustomerProfileHeroProps) => {
    const data = useFragment(customerProfileHeroFragment, customer);

    return (
        <div className="mb-6">
            <BackButton label="Back to Customers" />

            <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <Avatar
                    name={data.companyName}
                    className="w-20 h-20 text-2xl shrink-0"
                    color="primary"
                />
                <div className="text-center sm:text-left flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {data.companyName}
                    </h1>
                    {data.contactName && (
                        <p className="text-gray-500 dark:text-gray-400 mt-1.5 text-base">
                            {data.contactName}{data.contactTitle ? ` • ${data.contactTitle}` : ""}
                        </p>
                    )}
                    <div className="mt-3 flex items-center justify-center sm:justify-start gap-2">
                        <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/20">
                            Customer ID: {data.id}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
