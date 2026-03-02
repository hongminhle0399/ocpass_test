import { useQuery } from "@tanstack/react-query";
import { CUSTOMER_DETAILS_CACHE_KEY } from "../constants";
import { graphqlClient } from "@/shared/lib/graphql-client";
import { GetCustomerProfileDocument } from "@/graphql/__generated__/graphql";
import { useMemo } from "react";
import type { CustomerDetails } from "../types";

export const useCustomerDetails = (id: string) => {
  const { isLoading, data, error } = useQuery({
    queryKey: [CUSTOMER_DETAILS_CACHE_KEY, id],
    queryFn: () => {
      return graphqlClient.request(GetCustomerProfileDocument, {
        id: id,
      });
    },
  });

  const customerDetail = useMemo(() => {
    if (data?.node) {
        return data.node
    }
    return null
  }, [data?.node])

  return {
    isLoading,
    data: customerDetail as CustomerDetails,
    error,
  };
};
