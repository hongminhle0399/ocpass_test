import { FunnelIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import { useState } from "react";
import { Filters } from "./Filters";

export const OrdersFilter = () => {
  const [isFilter, setIsFilter] = useState<boolean>(false);

  const onFilterClick = () => {
    setIsFilter(!isFilter);
  };
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-4 items-center">
        <p className="text-4xl ml-4 font-medium text-blue-600">Orders</p>
        <div className="flex gap-y-4 ml-auto">
          <Button
            onPress={onFilterClick}
            color="primary"
            startContent={<FunnelIcon className="size-4" />}
          >
            Filter
          </Button>
        </div>
      </div>
      {isFilter && <Filters />}
    </div>
  );
};
