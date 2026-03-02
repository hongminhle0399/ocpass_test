import {
  GetOrdersDocument,
  type GetOrdersQuery,
} from "@/graphql/__generated__/graphql";
import { graphqlClient } from "@/shared/lib/graphql-client";
import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import { ORDERS_CACHE_KEY } from "../constants";
import type { OrderFilterModel, OrderModel } from "../types";
import { useOrdersStore } from "../store";
import { useMemo } from "react";
import { toOrderModel } from "../utils";

interface UseOrderProps {
  after?: string;
  filter?: OrderFilterModel;
}

export const useOrders = (props: UseOrderProps) => {
  const { after = null, filter } = props;
  const takeNumber = useOrdersStore(state => state.takeNumber)

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
    GetOrdersQuery,
    Error,
    InfiniteData<GetOrdersQuery>,
    (string | { first: number | null })[],
    string | null
  >({
    queryKey: [ORDERS_CACHE_KEY],
    queryFn: ({ pageParam }) => {
      return graphqlClient.request(GetOrdersDocument, {
        first: takeNumber,
        after: pageParam,
      });
    },
    initialPageParam: after,
    getNextPageParam: (lastPageParam) => {
      return lastPageParam.orders?.pageInfo?.hasNextPage
        ? lastPageParam.orders?.pageInfo.endCursor
        : null;
    },
  });

  const orders = useMemo(() => {
    if (data?.pages) {
      return data?.pages.reduce((acc, page) => {
        if (page.orders?.nodes) {
          return acc.concat(page.orders.nodes.map(toOrderModel))
        }
        return acc
      }, [] as OrderModel[])
    }
    return 
  }, [data?.pages])

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
