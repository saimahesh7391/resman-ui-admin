// resman-ui-admin/src/admin/AdminRoutes.tsx
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Settings from "./pages/Settings";
import UserManagement from "./pages/UserManagement";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default AdminRoutes;