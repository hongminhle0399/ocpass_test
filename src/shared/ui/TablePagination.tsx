import { Button } from "@heroui/react";
import { useEffect, useState } from "react";

interface TablePaginationProps {
  loadNext: () => void;
  loadPrevious: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  isLoading: boolean
}

export const TablePagination = ({
  hasNext,
  hasPrevious,
  loadNext,
  loadPrevious,
  isLoading
}: TablePaginationProps) => {
  return (
    <div className="flex w-full justify-end gap-2">
      <Button
        isDisabled={!hasPrevious || isLoading}
        size="sm"
        variant="flat"
        onPress={loadPrevious}
      >
        Previous
      </Button>
      <Button isDisabled={!hasNext || isLoading} size="sm" variant="flat" onPress={loadNext}>
        Next
      </Button>
    </div>
  );
};
