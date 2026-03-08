import { useParams } from "react-router";
import { CustomerDetailsFeature } from "@/features/CustomerDetails/components";
import { Suspense } from "react";
import { Loading } from "@/shared/ui";

export const CustomerProfilePage = () => {
    const { id } = useParams<{ id: string }>();
    if (!id) return null;
    return (
        <Suspense fallback={<Loading label="Loading customer profile..." />}>
            <CustomerDetailsFeature customerId={id} />
        </Suspense>
    );
}
