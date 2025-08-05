// resmanui-admin/src/admin/AdminRoutes.tsx
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AdminDashboard />} />
      <Route path='/*' element={<div>Not Found</div>} />
    </Routes>
  );
};

export default AdminRoutes;
