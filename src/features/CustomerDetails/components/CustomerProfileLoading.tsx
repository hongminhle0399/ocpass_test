import { Avatar, Skeleton } from "@heroui/react";
import type { PropsWithChildren } from "react";

interface CustomerProfileLoadingProps {
  loading: boolean;
  children: React.ReactElement;
  data: unknown;
}

export const CustomerProfileLoading = ({
  children,
  loading,
  data,
}: CustomerProfileLoadingProps) => {
  if (loading) {
    return (
      <div className="flex w-full bg-white rounded-xl p-6">
        <div className="flex gap-x-4 w-1/5 flex-col items-center">
          <Skeleton isLoaded={!loading} className="rounded-full size-24 mb-8">
            <div className="size-16 rounded-full bg-secondary" />
          </Skeleton>
          <div className="flex flex-col w-full gap-y-4 items-center">
            <Skeleton className="w-2/5 rounded-lg" isLoaded={!loading}>
              <div className="h-6 rounded-lg bg-secondary" />
            </Skeleton>
            <Skeleton className="w-3/5 rounded-lg" isLoaded={!loading}>
              <div className="h-6 rounded-lg bg-secondary" />
            </Skeleton>
          </div>
        </div>
        <div className="flex w-full flex-col gap-y-6 p-2">
          <Skeleton className="w-full md:w-3/5 rounded-lg" isLoaded={!loading}>
            <div className="h-6 rounded-lg bg-secondary" />
          </Skeleton>
          <Skeleton className="w-full md:w-3/5 rounded-lg" isLoaded={!loading}>
            <div className="h-6 rounded-lg bg-secondary" />
          </Skeleton>
          {(new Array(3)).fill(0).map((_) => (
            <Skeleton
              className="w-full md:w-4/5 rounded-lg"
              isLoaded={!loading}
            >
              <div className="h-6 rounded-lg bg-secondary" />
            </Skeleton>
          ))}
        </div>
      </div>
    );
  }
  if (data) {
    return children;
  }

  return <div>Nothing to show...</div>;
};
