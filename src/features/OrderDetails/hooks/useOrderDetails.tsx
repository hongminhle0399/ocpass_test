import { useQuery } from "@apollo/client/react";
import { GET_ORDER_DETAILS_QUERY } from "../graphql";
import { useEffect, useState } from "react";

interface UseOrderProps {
  orderId: number;
  after?: string;
}

export const useOrderDetails = ({ orderId, after }: UseOrderProps) => {
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [endCursor, setEndCursor] = useState<string | undefined>(undefined);

  const { data, error, loading, fetchMore } = useQuery(
    GET_ORDER_DETAILS_QUERY,
    {
      variables: {
        orderId: orderId,
        after: after || endCursor,
      },
    },
  );

  useEffect(() => {
    setHasNextPage(!!data?.orders?.pageInfo?.hasNextPage);
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
