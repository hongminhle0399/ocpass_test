import { FunnelIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Select,
  SelectItem,
  type SharedSelection,
} from "@heroui/react";
import { useState } from "react";
import { TAKE_OPTIONS } from "../../constants";
import { Filter } from "./Filter";
import { useOrdersStore } from "../../store";

export const OrdersFilter = () => {
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const setTakeNumber = useOrdersStore((state) => state.setTakeNumber);

  const onFilterClick = () => {
    setIsFilter(!isFilter);
  };

  const onTakeChange = (keys: SharedSelection) => {
    setTakeNumber(parseInt(keys.currentKey!));
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-4 items-center md:p-0 px-4 pt-4">
        <p className="text-2xl md:text-4xl md:ml-4 font-medium text-blue-600">
          Orders
        </p>
        <div className="flex gap-y-4 gap-x-4 ml-auto">
          <Select
            aria-label="Take a number of order"
            className="w-24 max-w-xs"
            onSelectionChange={onTakeChange}
            defaultSelectedKeys={[String(TAKE_OPTIONS[0])]}
          >
            {TAKE_OPTIONS.map((item) => {
              return <SelectItem key={item}>{String(item)}</SelectItem>;
            })}
          </Select>
          <Button
            onPress={onFilterClick}
            color="primary"
            startContent={<FunnelIcon className="size-4" />}
          >
            Filter
          </Button>
        </div>
      </div>
      {isFilter && <Filter />}
    </div>
  );
};
