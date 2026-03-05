import { useParams } from "react-router";
import { CustomerDetailFeature } from "@/features/CustomerDetail/components";

export const CustomerProfilePage = () => {
    const { id } = useParams<{ id: string }>();
    if (!id) return null;
    return <CustomerDetailFeature customerId={id} />;
}

