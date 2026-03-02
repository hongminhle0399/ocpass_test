import { useParams } from "react-router";
import { useCustomerDetails } from "../hooks/useCustomerDetails";
import { CustomerProfileLoading } from "./CustomerProfileLoading";
import { Accordion, AccordionItem, Avatar } from "@heroui/react";
import { typedKeys } from "@/shared/types/utils";
import type { CustomerDetails } from "../types";
import { CUSTOMER_DETAILS_FIELDS } from "../constants";

export const CustomerProfileFeature = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useCustomerDetails(id!);

  const renderInforItem = (
    title: keyof CustomerDetails,
    content: string | undefined | null,
  ) => {
    if (!title) {
      return null;
    }
    return (
      <div className="flex justify-between p-2 py-4 hover:bg-gray-100 hover:rounded-xl">
        <p className="font-semibold">{CUSTOMER_DETAILS_FIELDS[title]}: </p>
        <p>{content ?? "N/A"}</p>
      </div>
    );
  };

  return (
    <CustomerProfileLoading loading={isLoading} data={data}>
      <div className="flex md:flex-row flex-col w-full bg-white rounded-xl p-6">
        <div className="flex mb-8">
          <div className="mx-auto md:mx-10">
            <Avatar
              className="size-24 mx-auto mb-6"
              classNames={{
                name: "text-3xl",
              }}
              name={data?.contactName || ""}
            />
            <div className="flex flex-col justify-center text-center">
              <p className="text-xl font-semibold">{data?.contactName}</p>
              <p>{data?.contactTitle}</p>
            </div>
          </div>
        </div>
        <div className="flex-row md:flex-col md:ml-6 flex-1">
          {data &&
            typedKeys(data)
              .filter((key) => !["contactName", "contactTitle"].includes(key))
              .map((key) => {
                return renderInforItem(key, data[key]);
              })}
          <Accordion>
            <AccordionItem
              classNames={{ title: "font-semibold", base: "hover:bg-gray-100 hover:rounded-xl -mx-2 px-2" }}
              title="Orders"
            ></AccordionItem>
          </Accordion>
        </div>
      </div>
    </CustomerProfileLoading>
  );
};
