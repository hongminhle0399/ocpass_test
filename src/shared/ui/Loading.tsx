import { Spinner } from "@heroui/react";

interface LoadingProps {
    label?: string;
    className?: string;
}

export const Loading = ({ label = "Loading...", className = "" }: LoadingProps) => {
    return (
        <div className={`flex flex-col items-center justify-center p-8 w-full h-full min-h-[200px] gap-3 ${className}`}>
            <Spinner size="lg" color="primary" labelColor="primary" label={label} />
        </div>
    );
};
