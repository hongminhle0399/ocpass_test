import { MainLayout } from "@/layouts";
import { CustomersPage, NotFoundPage, OrdersPage } from "@/pages";
import { BrowserRouter, Routes, Route } from "react-router";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/customers" element={<CustomersPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
