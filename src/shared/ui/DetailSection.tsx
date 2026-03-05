import type { ReactNode } from "react";

interface DetailSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const DetailSection = ({
  title,
  children,
  className = "",
}: DetailSectionProps) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden ${className}`}
    >
      <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
          {title}
        </h2>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  );
};
