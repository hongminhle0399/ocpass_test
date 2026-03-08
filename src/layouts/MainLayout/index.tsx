import { usePageName } from "@/shared/lib";
import TheHeader from "./components/TheHeader";
import { Outlet } from "react-router";

export const MainLayout = () => {
  const name = usePageName()
  return (
    <div className="flex bg-gray-200 dark:bg-gray-900 h-[100dvh] flex-col min-w-96 overflow-hidden">
      <TheHeader />
      <main className="p-0 md:p-4 flex-1 flex flex-col min-h-0">
        <h1 className="text-3xl font-medium text-blue-500 shrink-0">{name}</h1>
        <Outlet />
      </main>
    </div>
  );
};

