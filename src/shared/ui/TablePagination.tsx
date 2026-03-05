import { Button } from "@heroui/react";

interface TablePaginationProps {
  loadNext: () => void;
  loadPrevious: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const TablePagination = ({
  hasNext,
  hasPrevious,
  loadNext,
  loadPrevious,
}: TablePaginationProps) => {
  return (
    <div className="hidden sm:flex w-[30%] justify-end gap-2">
      <Button
        isDisabled={hasPrevious}
        size="sm"
        variant="flat"
        onPress={loadPrevious}
      >
        Previous
      </Button>
      <Button isDisabled={hasNext} size="sm" variant="flat" onPress={loadNext}>
        Next
      </Button>
    </div>
  );
};
