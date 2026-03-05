interface DetailInfoRowProps {
    label: string;
    value?: string | number | null;
    mono?: boolean;
}

export const DetailInfoRow = ({ label, value, mono = false }: DetailInfoRowProps) => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center py-2.5 border-b border-gray-100 dark:border-gray-700 last:border-b-0 gap-1">
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider sm:min-w-36">
                {label}
            </span>
            <span
                className={`text-sm text-gray-800 dark:text-gray-200 ${mono ? "font-mono" : ""}`}
            >
                {value ?? (
                    <span className="text-gray-300 dark:text-gray-600 italic">—</span>
                )}
            </span>
        </div>
    );
};
