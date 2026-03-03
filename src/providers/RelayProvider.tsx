import type { PropsWithChildren } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { Environment, Network, type FetchFunction } from "relay-runtime";

const HTTP_ENDPOINT = "/graphql";

const fetchGraphQL: FetchFunction = async (request, variables) => {
  const resp = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    credentials: 'include',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: request.text, variables }),
  });
  if (!resp.ok) {
    throw new Error("Response failed.");
  }
  return await resp.json();
};

const environment = new Environment({
  network: Network.create(fetchGraphQL),
});

export const RelayProvider = ({ children }: PropsWithChildren) => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
};
