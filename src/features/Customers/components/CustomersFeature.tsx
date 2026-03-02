import { CustomersFilter } from "./CustomersFilter";
import { CustomersTable } from "./CustomersTable";

export const CustomersFeature = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <CustomersFilter />
      <CustomersTable />
    </div>
  );
};
