import { useQuery } from "@apollo/client/react";
import { GET_ORDERS_QUERY } from "../graphql";
import { useEffect, useState } from "react";

interface UseOrderProps {
  first?: number;
  after?: string;
}

export const useOrders = (props?: UseOrderProps) => {
  const first = props?.first ?? 10;
  const after = props?.after;

  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [endCursor, setEndCursor] = useState<string | undefined>(undefined);

  const { data, error, loading, fetchMore } = useQuery(GET_ORDERS_QUERY, {
    variables: {
      first,
      after,
    },
  });

  useEffect(() => {
    setHasNextPage(!!data?.orders?.pageInfo.hasNextPage);
    setEndCursor(data?.orders?.pageInfo?.endCursor ?? undefined);
  }, [data?.orders?.pageInfo]);

  const onFetchMore = () => {
    fetchMore({
      variables: {
        after: endCursor,
      },
    });
  };

  return {
    hasNextPage,
    error,
    loading,
    data,
    onFetchMore,
  };
};
