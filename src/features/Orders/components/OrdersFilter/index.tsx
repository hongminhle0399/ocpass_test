import { FunnelIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Drawer,
  DrawerContent,
  Select,
  SelectItem,
  useDisclosure,
  type SharedSelection,
} from "@heroui/react";
import { TAKE_OPTIONS } from "../../constants";
import { useOrdersStore } from "../../store";
import { FilterControls } from "./FilterControls";

export const OrdersFilter = () => {
  const setTakeNumber = useOrdersStore((state) => state.setTakeNumber);
  const takeNumber = useOrdersStore((state) => state.takeNumber);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onTakeChange = (keys: SharedSelection) => {
    setTakeNumber(keys.currentKey!);
  };

  return (
    <div className="flex flex-col gap-y-4 shrink-0">
      <div className="flex gap-x-4 items-center md:p-0 px-4 pt-4">
        <div className="flex gap-y-4 gap-x-4 ml-auto">
          <Select
            aria-label="Take a number of order"
            className="w-24 max-w-xs"
            onSelectionChange={onTakeChange}
            defaultSelectedKeys={[takeNumber]}
          >
            {TAKE_OPTIONS.map((item) => {
              return <SelectItem key={item}>{item}</SelectItem>
            })}
          </Select>
          <Button
            onPress={onOpen}
            color="primary"
            startContent={<FunnelIcon className="size-4" />}
          >
            Filter
          </Button>
        </div>
      </div>
      <Drawer onOpenChange={onOpenChange} isOpen={isOpen}>
        <DrawerContent>
          <FilterControls onApplyFilter={onOpenChange} />
        </DrawerContent>
      </Drawer>
    </div>
  );
};
