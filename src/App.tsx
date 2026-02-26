import Routing from "@/routing";
import { ApolloClientProvider } from "./providers";
import { useAppSettingsStore } from "./store";
import { useEffect } from "react";

function App() {
  const isDarkMode = useAppSettingsStore((state) => state.isDarkMode);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <ApolloClientProvider>
      <Routing />
    </ApolloClientProvider>
  );
}

export default App;
