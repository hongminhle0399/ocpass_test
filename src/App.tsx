import Routing from "@/routing";
import { ReactQueryProvider } from "./providers";
import { useAppSettingsStore } from "./shared/store";
import { useEffect } from "react";

function App() {
  const isDarkMode = useAppSettingsStore((state) => state.isDarkMode);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <ReactQueryProvider>
      <Routing />
    </ReactQueryProvider>
  );
}

export default App;
