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

export function Filter() {
  const customersFilter = useCustomersStore((state) => state.customersFilter);
  const updateCustomersFilter = useCustomersStore(
    (state) => state.updateCustomersFilter,
  );

  const provideFilterHandler = useCallback(
    (orderKey: CustomerFilterModelKey) => {
      const callbacks: FilterHanlderProvider = {
        id: (event: ChangeEvent<HTMLInputElement>) => {
          updateCustomersFilter({ id: event?.target.value });
        },
        contactName: (event: ChangeEvent<HTMLInputElement>) => {
          updateCustomersFilter({ contactName: event?.target.value });
        },
        phone: (event: ChangeEvent<HTMLInputElement>) => {
          updateCustomersFilter({ phone: event?.target.value });
        },
      };
      return callbacks[orderKey];
    },
    [],
  );

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
      case "id":
      case "contactName":
      case "phone":
        return renderInputFilter(filterKey);
      default:
        return <div key={filterKey}>{filterKey}</div>;
    }
  };

  const filters = useMemo(() => {
    return typedKeys(FILTER_CATEGORIES).map(renderFilter);
  }, [customersFilter.contactName, customersFilter.id, customersFilter.phone]);

  const onApplyFilter = async () => {
    // await fetchNextPage()
    // const timeoutId = setTimeout(() => {
    //   dataTableRef.current?.scrollIntoView({
    //     behavior: "smooth",
    //   });
    //   clearTimeout(timeoutId);
    // }, SCROLL_TABLE_TO_VIEW_DELAY);
  };

  return (
    <div className="bg-content1 rounded-large p-4">
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {filters}
      </div>
      <Button
        onPress={onApplyFilter}
        className="mt-4"
        color="primary"
        variant="flat"
      >
        Apply
      </Button>
    </div>
  );
}
