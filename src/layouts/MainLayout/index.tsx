import TheHeader from "./components/TheHeader";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <TheHeader />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

