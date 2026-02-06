import { Routes, Route } from "react-router-dom";
import AdminLayout from "./admin/components/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import Products from "./admin/pages/Products";
import Orders from "./admin/pages/Orders";
import Subscriptions from "./admin/pages/Subscriptions";
import Labs from "./admin/pages/Labs";
import Stores from "./admin/pages/Stores";
import Categories from "./admin/pages/Categories";
import { AdminProvider } from "./admin/context/AdminContext";
import { ToastProvider } from "./admin/context/ToastContext";

export default function AdminApp() {
  return (
    <AdminProvider>
      <ToastProvider>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/subscriptions" element={<Subscriptions />} />
            <Route path="/admin/labs" element={<Labs />} />
            <Route path="/admin/stores" element={<Stores />} />
            <Route path="/admin/categories" element={<Categories />} />
          </Route>
        </Routes>
      </ToastProvider>
    </AdminProvider>
  );
}
