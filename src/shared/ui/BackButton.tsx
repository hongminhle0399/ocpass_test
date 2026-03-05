import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router";

interface BackButtonProps {
    label?: string;
}

export const BackButton = ({ label = "Back" }: BackButtonProps) => {
    const navigate = useNavigate();
    return (
        <Button
            onPress={() => navigate(-1)}
            variant="light"
            color="primary"
            size="sm"
            startContent={<ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />}
            className="group font-medium -ml-3"
        >
            {label}
        </Button>
    );
};
