import { MainLayout } from "@/layouts";
import { CustomerProfilePage, CustomersPage, NotFoundPage, OrderDetailsPage, OrdersPage } from "@/pages";
import { DefaultError } from "@/shared/ui/DefaultError";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: '/',
    errorElement: <DefaultError />,
    children: [
      {
        index: true,
        element: <Navigate to="/orders" replace />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
        handle: { pageName: "Orders" },
      },
      {
        path: "orders/:id",
        element: <OrderDetailsPage />,
        handle: { pageName: "Order Detail" },
      },
      {
        path: "customers",
        element: <CustomersPage />,
        handle: { pageName: "Customers" },
      },
      {
        path: "customers/:id",
        element: <CustomerProfilePage />,
        handle: { pageName: "Customer Detail" },
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
