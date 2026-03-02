import {
  GetCustomersDocument,
  type GetCustomersQuery
} from "@/graphql/__generated__/graphql";
import { graphqlClient } from "@/shared/lib/graphql-client";
import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import { useMemo } from "react";
import { CUSTOMERS_CACHE_KEY } from "../constants";
import { useCustomersStore } from "../store";
import type { CustomerModel } from "../types";
import { toCustomerModel } from "../utils";

interface UserCustomersProps {
  after?: string;
  filter?: {
    id?: string;
  };
}

export const useCustomers = (props: UserCustomersProps) => {
  const { after = null, filter } = props;
  const takeNumber = useCustomersStore((state) => state.takeNumber);

  const {
    data,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isFetching,
    error,
    status,
    fetchNextPage,
  } = useInfiniteQuery<
    GetCustomersQuery,
    Error,
    InfiniteData<GetCustomersQuery>,
    (string | { first: number | null })[],
    string | null
  >({
    queryKey: [CUSTOMERS_CACHE_KEY],
    queryFn: ({ pageParam }) => {
      return graphqlClient.request(GetCustomersDocument, {
        first: takeNumber,
        after: pageParam,
      });
    },
    initialPageParam: after,
    getNextPageParam: (lastPageParam) => {
      return lastPageParam.customers?.pageInfo?.hasNextPage
        ? lastPageParam.customers?.pageInfo.endCursor
        : null;
    },
  });

  const orders = useMemo(() => {
    if (data?.pages) {
      return data?.pages.reduce((acc, page) => {
        if (page.customers?.nodes) {
          return acc.concat(page.customers.nodes.map(toCustomerModel));
        }
        return acc;
      }, [] as CustomerModel[]);
    }
    return;
  }, [data?.pages]);

  return {
    hasNextPage,
    error: error,
    loading: isLoading,
    isFetching,
    isFetchingNextPage,
    data: orders,
    status,
    fetchNextPage,
  };
};
