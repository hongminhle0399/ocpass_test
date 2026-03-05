import { usePageName } from "@/shared/lib";
import TheHeader from "./components/TheHeader";
import { Outlet } from "react-router";

export const MainLayout = () => {
  const name = usePageName()
  return (
    <div className="flex bg-gray-200 dark:bg-gray-900 min-h-screen flex-col min-w-96">
      <TheHeader />
      <main className="p-0 md:p-4 flex-1">
        <h1 className="text-3xl font-medium text-blue-500">{name}</h1>
        <Outlet />
      </main>
    </div>
  );
};

