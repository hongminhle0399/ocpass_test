import { typedKeys } from "@/shared/types/utils";
import { Button, Input } from "@heroui/react";
import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { FILTER_CATEGORIES } from "../../constants";
import { useCustomersStore } from "../../store";
import type {
  CustomerFilterModel,
  CustomerFilterModelKey,
  InputFilter,
  InputFilterField
} from "../../types";

interface FilterControlsProps {
  onApplyFilter: () => void
}

export function FilterControls({ onApplyFilter }: FilterControlsProps) {
  const customersFilter = useCustomersStore((state) => state.customersFilter);
  const updateCustomersFilter = useCustomersStore(
    (state) => state.updateCustomersFilter,
  );
  const resetCustomersFilter = useCustomersStore(
    (state) => state.resetCustomersFilter,
  );
  const [localFilter, setLocalFilter] = useState<CustomerFilterModel>(customersFilter)

  const provideFilterHandler = (orderFilterKey: keyof InputFilterField) => {
    switch (orderFilterKey) {
      case 'company':
        return (event: ChangeEvent<HTMLInputElement>) => {
          setLocalFilter({ ...localFilter, company: event?.target.value });
        }
      case 'contactName':
        return (event: ChangeEvent<HTMLInputElement>) => {
          setLocalFilter({ ...localFilter, contactName: event?.target.value });
        }
      case 'id':
        return (event: ChangeEvent<HTMLInputElement>) => {
          setLocalFilter({ ...localFilter, id: event?.target.value });
        }
      default:
        return undefined
    }
  }

  const renderInputFilter = (orderFilterKey: keyof InputFilterField) => {
    const filterCategory = FILTER_CATEGORIES[orderFilterKey] as InputFilter;
    const controlHandler = provideFilterHandler(orderFilterKey);
    return (
      <Input
        key={orderFilterKey}
        className="max-w-full md:max-w-md"
        labelPlacement="outside-top"
        label={filterCategory.label}
        value={localFilter[orderFilterKey] ?? ""}
        onChange={controlHandler}
        placeholder={filterCategory.placeholder}
        defaultValue={filterCategory.defaultValue}
      />
    );
  };

  const renderFilter = (filterKey: CustomerFilterModelKey) => {
    if (!FILTER_CATEGORIES[filterKey]) return null;
    switch (filterKey) {
      case "contactName":
      case "id":
      case "company":
        return renderInputFilter(filterKey);
      default:
        return null
    }
  };

  const filters = useMemo(() => {
    return typedKeys(FILTER_CATEGORIES).map(renderFilter);
  }, [customersFilter, localFilter]);

  const applyFilter = async () => {
    onApplyFilter()
    updateCustomersFilter(localFilter)
  };

  const resetFilter = () => {
    resetCustomersFilter()
  }

  useEffect(() => {
    setLocalFilter(customersFilter)
  }, [customersFilter])

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
