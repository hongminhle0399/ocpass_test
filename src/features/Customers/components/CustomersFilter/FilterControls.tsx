import { typedKeys } from "@/shared/types/utils";
import { Button, Input } from "@heroui/react";
import { useCallback, useMemo, type ChangeEvent } from "react";
import { FILTER_CATEGORIES } from "../../constants";
import { useCustomersStore } from "../../store";
import type {
  CustomerFilterModelKey,
  FilterHanlderProvider,
  InputFilter,
  InputFilterField,
} from "../../types";

interface FilterControlsProps {
  onApplyFilter: () => void
}

export function FilterControls({ onApplyFilter }: FilterControlsProps) {
  const customersFilter = useCustomersStore((state) => state.customersFilter);
  const updateCustomersFilter = useCustomersStore(
    (state) => state.updateCustomersFilter,
  );

  const provideFilterHandler = useCallback((orderKey: CustomerFilterModelKey) => {
    const callbacks: FilterHanlderProvider = {
      company: (event: ChangeEvent<HTMLInputElement>) => {
        updateCustomersFilter({ company: event?.target.value });
      },
      contactName: (event: ChangeEvent<HTMLInputElement>) => {
        updateCustomersFilter({ contactName: event?.target.value });
      },
      id: (event: ChangeEvent<HTMLInputElement>) => {
        updateCustomersFilter({ id: event?.target.value });
      }
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
        value={customersFilter[orderFilterKey] ?? ""}
        onChange={controlHandler}
        placeholder={filterCategory.placeholder}
        defaultValue={filterCategory.defaultValue}
      />
    );
  };

  const renderFilter = (filterKey: CustomerFilterModelKey) => {
    if (!FILTER_CATEGORIES[filterKey]) return null;
    switch (filterKey) {
      // case "id":
      case "contactName":
      case "id":
      // case "customerContactName":
      // case "employeeName":
      case "company":
        // case "shipCountry":
        // case "shipName":
        return renderInputFilter(filterKey);
      default:
        return <div key={filterKey}>{filterKey}</div>;
    }
  };

  const filters = useMemo(() => {
    return typedKeys(FILTER_CATEGORIES).map(renderFilter);
  }, [customersFilter]);

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
