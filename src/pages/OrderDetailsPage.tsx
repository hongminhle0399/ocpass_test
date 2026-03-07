import { useParams } from "react-router";
import { OrderDetailsFeature } from "@/features/OrderDetails/components";
import { Suspense, useMemo } from "react";
import { useRelayEnvironment } from "react-relay";
import { getOrLoadOrderDetailsQuery } from "@/features/OrderDetails/components/OrderDetailsFeature";
import { Loading } from "@/shared/ui";

export const OrderDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const environment = useRelayEnvironment();

    const queryRef = useMemo(() => {
        if (!id) return null;
        return getOrLoadOrderDetailsQuery(environment, id);
    }, [id, environment]);

    if (!queryRef) {
        return <Loading label="Initializing order..." />;
    }

    return (
        <Suspense fallback={<Loading label="Loading order details..." />}>
            <OrderDetailsFeature queryRef={queryRef} />
        </Suspense>
    );
};