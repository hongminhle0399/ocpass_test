import Routing from "@/routing";
import { ApolloClientProvider } from "./providers";

function App() {
  return (
    <ApolloClientProvider>
      <Routing />
    </ApolloClientProvider>
  );
}

export default App;
