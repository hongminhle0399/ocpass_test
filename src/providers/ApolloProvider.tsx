import { InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import type { PropsWithChildren } from "react";

const client = new ApolloClient({
  devtools: {
    enabled: true,
  },
  link: new HttpLink({ uri: "graphql" }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          orders: {
            keyArgs: false, // ignore page args
            merge(existing = { items: [] }, incoming) {
              return {
                __typename: incoming.__typename,
                nodes: [
                  ...(existing?.nodes ?? []),
                  ...incoming.nodes,
                ],
                pageInfo: incoming.pageInfo,
              }
            },
          },
        },
      },
    },
  }),
});

export const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
