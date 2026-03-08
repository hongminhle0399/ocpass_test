import { CustomerDetailsFeature } from "@/features/CustomerDetails/components";
import { customerPrefetchRegistry } from "@/features/CustomerDetails/components/CustomerDetailsFeature";
import { Loading } from "@/shared/ui";
import { Suspense, useMemo } from "react";
import { useRelayEnvironment } from "react-relay";
import { useParams } from "react-router";

export const CustomerProfilePage = () => {
    const { id } = useParams<{ id: string }>();
    const environment = useRelayEnvironment();


    const queryRef = useMemo(() => {
        if (!id) return null;
        return customerPrefetchRegistry.getOrLoad(environment, id);
    }, [id, environment]);

    if (!queryRef) {
        return <Loading label="Initializing profile..." />;
    }

    return (
        <Suspense fallback={<Loading label="Loading customer profile..." />}>
            <CustomerDetailsFeature queryRef={queryRef} />
        </Suspense>
    );
};
