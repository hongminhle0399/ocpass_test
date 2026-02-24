import Routing from "@/routing";
import { HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  link: new HttpLink({ uri: "graphql" }),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Routing />
    </ApolloProvider>
  );
}

export default App;
