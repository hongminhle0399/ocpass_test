import Routing from "@/routing";
import { RelayProvider } from "./providers";
import { useAppSettingsStore } from "./shared/store";
import { useEffect } from "react";

function App() {
  const isDarkMode = useAppSettingsStore((state) => state.isDarkMode);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <RelayProvider>
      <Routing />
    </RelayProvider>
  );
}

export default App;
