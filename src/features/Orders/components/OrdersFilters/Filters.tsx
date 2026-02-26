import { typedKeys } from "@/shared/types/utils";
import { Button, DateRangePicker, Input } from "@heroui/react";
import { useCallback, useEffect, useMemo, type ChangeEvent } from "react";
import { useOrdersContext } from "../../hooks";
import type {
  DateFilter,
  FilterHanlderProvider,
  InputFilter,
  OrderFilter,
  OrderKey,
} from "../../types";

const filterCategories: OrderFilter = {
  id: {
    available: true,
    label: "ID",
    placeholder: "Filter By Order ID",
    defaultValue: "",
  },
  customerId: {
    available: true,
    label: "Customer ID",
    placeholder: "Filter By Customer ID",
    defaultValue: "",
  },
  employeeName: {
    available: true,
    label: "Employee Name",
    placeholder: "Filter By Customer Name",
    defaultValue: "",
  },
  orderDate: {
    available: false,
    label: "Order Date",
    defaultValue: null,
  },
  customerPhone: {
    available: true,
    label: "Customer Phone",
    placeholder: "Filter By Customer Phone: 0123444666...",
    defaultValue: "",
  },
  customerContactName: {
    available: true,
    label: "Customer Contact Name",
    placeholder: "Filter By Customer Contact Name: Minh Le...",
    defaultValue: "",
  },
  shipAddress: {
    available: true,
    label: "Ship Address",
    placeholder: "Filter By Customer Name: Minh Le...",
    defaultValue: "",
  },
  shipCountry: {
    available: true,
    label: "Ship Country",
    placeholder: "Filter By Ship Country",
    defaultValue: "",
  },
  shipName: {
    available: true,
    label: "Ship Country",
    placeholder: "Filter By Ship Country",
    defaultValue: "",
  },
  shippedDate: {
    available: false,
    label: "Order Date",
    defaultValue: null,
  },
};

export function Filters() {
  const { setOrdersFilters, ordersFilters } = useOrdersContext();

  const provideFilterHandler = useCallback((orderKey: OrderKey) => {
    const callbacks = {
      id: (event: ChangeEvent<HTMLInputElement>) => {
        setOrdersFilters({ id: event.target?.value });
      },
      customerContactName: () => {},
      customerId: () => {},
      customerPhone: () => {},
      employeeName: () => {},
      orderDate: () => {},
      shipAddress: () => {},
      shipCountry: () => {},
      shipName: () => {},
      shippedDate: () => {},
    } as FilterHanlderProvider;
    return callbacks[orderKey];
  }, []);

  const renderInputFilter = (orderKey: OrderKey) => {
    const filterCategory = filterCategories[orderKey] as InputFilter;
    const controlHandler = provideFilterHandler(orderKey);
    return (
      <Input
        key={orderKey}
        className="max-w-md"
        labelPlacement="outside-top"
        label={filterCategory.label}
        value={ordersFilters[orderKey]}
        onChange={controlHandler}
        placeholder={filterCategory.placeholder}
        defaultValue={filterCategory.defaultValue}
      />
    );
  };

  const renderDateFilter = (orderKey: OrderKey) => {
    const filterCategory = filterCategories[orderKey] as DateFilter;
    const controlHandler = provideFilterHandler(orderKey);
    return (
      <DateRangePicker
        key={orderKey}
        onChange={controlHandler}
        value={filterCategory.defaultValue}
        className="max-w-md"
        labelPlacement="outside-top"
        label={filterCategory.label}
      />
    );
  };

  const renderFilter = (filterKey: OrderKey) => {
    if (!filterCategories[filterKey]) return null;
    switch (filterKey) {
      case "id":
      case "customerId":
      case "customerPhone":
      case "customerContactName":
      case "employeeName":
      case "shipAddress":
      case "shipCountry":
      case "shipName":
        return renderInputFilter(filterKey);
      case "shippedDate":
      case "orderDate":
        return renderDateFilter(filterKey);
      default:
        return <div>{filterKey}</div>;
    }
  };

  const filters = useMemo(() => {
    return typedKeys(filterCategories).map(renderFilter);
  }, [ordersFilters]);

  return (
    <div className="bg-content1 rounded-large p-4">
      <div className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-2 gap-4">
        {filters}
      </div>
      <Button className="mt-4" color="primary" variant="flat">
        Apply
      </Button>
    </div>
  );
}
