import { typedKeys } from "@/shared/types/utils";
import { Button, DateRangePicker, Input } from "@heroui/react";
import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { FILTER_CATEGORIES } from "../../constants";
import { useOrdersStore } from "../../store";
import type {
  DateFilterField,
  DatePickerValue,
  InputFilter,
  InputFilterField,
  OrderFilterModel,
  OrderFilterModelKey
} from "../../types";

interface FilterControlsProps {
  onApplyFilter: () => void
}

export function FilterControls({ onApplyFilter }: FilterControlsProps) {
  const ordersFilter = useOrdersStore((state) => state.ordersFilter);
  const updateOrdersFilter = useOrdersStore(
    (state) => state.updateOrdersFilter,
  );
  const resetOrdersFilter = useOrdersStore(
    (state) => state.resetOrdersFilter,
  );
  const [localFilter, setLocalFilter] = useState<OrderFilterModel>(ordersFilter)

  const provideInputHandler = (key: keyof InputFilterField) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setLocalFilter({ ...localFilter, [key]: event?.target.value });
    }
  }

  const provideDateHandler = (key: keyof DateFilterField) => {
    return (value: DatePickerValue | null) => {
      setLocalFilter({ ...localFilter, [key]: value });
    }
  }

  const renderInputFilter = (orderFilterKey: keyof InputFilterField) => {
    const filterCategory = FILTER_CATEGORIES[orderFilterKey] as InputFilter;
    const controlHandler = provideInputHandler(orderFilterKey);
    return (
      <Input
        key={orderFilterKey}
        className="max-w-full md:max-w-md"
        labelPlacement="outside-top"
        label={filterCategory.label}
        value={localFilter[orderFilterKey] ?? ''}
        onChange={controlHandler}
        placeholder={filterCategory.placeholder}
      />
    );
  };

  const renderDateFilter = (orderFilterKey: keyof DateFilterField) => {
    const filterCategory = FILTER_CATEGORIES[orderFilterKey];
    const controlHandler = provideDateHandler(orderFilterKey);

    return (
      <DateRangePicker
        selectorButtonPlacement="start"
        key={orderFilterKey}
        isRequired
        isInvalid={!localFilter[orderFilterKey]}
        errorMessage={!localFilter[orderFilterKey] ? "Please select a date range" : ""}
        onChange={controlHandler}
        value={localFilter[orderFilterKey]}
        className="max-w-full md:max-w-md"
        labelPlacement="outside-top"
        label={filterCategory?.label}
      />
    );
  };

  const renderFilter = (filterKey: OrderFilterModelKey) => {
    if (!FILTER_CATEGORIES[filterKey]) return null;
    switch (filterKey) {
      case "customerPhone":
        return renderInputFilter(filterKey);
      case "shippedDateRange":
      case "orderDateRange":
        return renderDateFilter(filterKey);
      default:
        return <div key={filterKey}>{filterKey}</div>;
    }
  };

  const filters = useMemo(() => {
    return typedKeys(FILTER_CATEGORIES).map(renderFilter);
  }, [localFilter]);

  useEffect(() => {
    setLocalFilter(ordersFilter)
  }, [ordersFilter])

  const applyFilter = async () => {
    if (!localFilter.shippedDateRange || !localFilter.orderDateRange) {
      return
    }
    updateOrdersFilter(localFilter)
    onApplyFilter()
  };

  const resetFilter = () => {
    resetOrdersFilter()
    setLocalFilter(ordersFilter)
  }

  return (
    <div className="bg-content1 rounded-large p-4">
      <div className="grid grid-cols-1 gap-4">
        {filters}
      </div>
      <div className="flex gap-x-2">
        <Button
          onPress={applyFilter}
          className="mt-4"
          color="primary"
          variant="flat"
        >
          Apply
        </Button>
        <Button
          onPress={resetFilter}
          className="mt-4"
          variant="flat"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
