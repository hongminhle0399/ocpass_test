import { AppErrorBoundaries } from "@/AppErrorBoundaries";
import { MainLayout } from "@/layouts";
import { CustomersPage, NotFoundPage, OrdersPage } from "@/pages";
import { DefaultError } from "@/shared/ui/DefaultError";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <DefaultError />,
    children: [
      {
        path: "/orders",
        element: <OrdersPage />,
        handle: { pageName: "Orders" },
      },
      {
        path: "/customers",
        element: <CustomersPage />,
        handle: { pageName: "Customers" },
      },
      // { path: "/customers/:id", element: <CustomerProfilePage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
