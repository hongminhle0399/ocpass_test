import { useParams } from "react-router";
import { OrderDetailFeature } from "@/features/OrderDetail/components";

export const OrderDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    if (!id) return null;
    return <OrderDetailFeature orderId={id} />;
}