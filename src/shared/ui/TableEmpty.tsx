import { cn } from "@heroui/react"

interface TableEmptyProps {
    text: string
    className?: string
}

export const TableEmptyContent = ({ text, className }: TableEmptyProps) => {
    return (
        <div className={cn("flex flex-col items-center justify-center", className)}>
            <p>{text}</p>
        </div>
    )
}