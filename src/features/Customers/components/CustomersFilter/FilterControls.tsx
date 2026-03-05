import { typedKeys } from "@/shared/types/utils";
import { Button, DateRangePicker, Input } from "@heroui/react";
import { useCallback, useMemo, type ChangeEvent } from "react";
import { FILTER_CATEGORIES } from "../../constants";
import { useOrdersStore } from "../../store";
import type {
  DateFilterField,
  DatePickerValue,
  FilterHanlderProvider,
  InputFilter,
  InputFilterField,
  OrderFilterModelKey,
} from "../../types";

interface FilterControlsProps {
  onApplyFilter: () => void
}

export function FilterControls({ onApplyFilter }: FilterControlsProps) {
  const ordersFilter = useOrdersStore((state) => state.ordersFilter);
  const updateOrdersFilter = useOrdersStore(
    (state) => state.updateOrdersFilter,
  );

  const provideFilterHandler = useCallback((orderKey: OrderFilterModelKey) => {
    const callbacks: FilterHanlderProvider = {
      customerId: (event: ChangeEvent<HTMLInputElement>) => {
        updateOrdersFilter({ customerId: event?.target.value });
      },
      customerPhone: (event: ChangeEvent<HTMLInputElement>) => {
        updateOrdersFilter({ customerPhone: event?.target.value });
      },
      orderDateRange: (value: DatePickerValue) => {
        updateOrdersFilter({ orderDateRange: value });
      },
      shippedDateRange: (value: DatePickerValue) => {
        updateOrdersFilter({ shippedDateRange: value });
      },
      shipAddress: (event: ChangeEvent<HTMLInputElement>) => {
        updateOrdersFilter({ shipAddress: event?.target.value });
      },
    };
    return callbacks[orderKey];
  }, []);

  const renderInputFilter = (orderFilterKey: keyof InputFilterField) => {
    const filterCategory = FILTER_CATEGORIES[orderFilterKey] as InputFilter;
    const controlHandler = provideFilterHandler(orderFilterKey);
    return (
      <Input
        key={orderFilterKey}
        className="max-w-full md:max-w-md"
        labelPlacement="outside-top"
        label={filterCategory.label}
        value={ordersFilter[orderFilterKey] ?? ""}
        onChange={controlHandler}
        placeholder={filterCategory.placeholder}
        defaultValue={filterCategory.defaultValue}
      />
    );
  };

  const renderDateFilter = (orderFilterKey: keyof DateFilterField) => {
    const filterCategory = FILTER_CATEGORIES[orderFilterKey];
    const controlHandler = provideFilterHandler(orderFilterKey);
    return (
      <DateRangePicker
        selectorButtonPlacement="start"
        key={orderFilterKey}
        onChange={controlHandler}
        value={ordersFilter[orderFilterKey]}
        defaultValue={null}
        className="max-w-full md:max-w-md"
        labelPlacement="outside-top"
        label={filterCategory?.label}
      />
    );
  };

  const renderFilter = (filterKey: OrderFilterModelKey) => {
    if (!FILTER_CATEGORIES[filterKey]) return null;
    switch (filterKey) {
      // case "id":
      case "customerId":
      case "customerPhone":
      // case "customerContactName":
      // case "employeeName":
      case "shipAddress":
        // case "shipCountry":
        // case "shipName":
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
  }, [ordersFilter]);

  const applyFilter = async () => {
    onApplyFilter()
  };

  return (
    <div className="bg-content1 rounded-large p-4">
      <div className="grid grid-cols-1 gap-4">
        {filters}
      </div>
      <Button
        onPress={applyFilter}
        className="mt-4"
        color="primary"
        variant="flat"
      >
        Apply
      </Button>
    </div>
  );
}
