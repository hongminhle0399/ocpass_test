import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

interface VirtualizedTableHookProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  estimateRowHeight?: number;
  overscan: number;
}

export function useVirtualizedTable<T>({
  columns,
  data,
  estimateRowHeight = 44,
  overscan = 8,
}: VirtualizedTableHookProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const rowVirtualizer = useVirtualizer({
    overscan,
    count: table.getRowModel().rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimateRowHeight 
  })

  return {
    table,
    rowVirtualizer,
    parentRef
  }
}

