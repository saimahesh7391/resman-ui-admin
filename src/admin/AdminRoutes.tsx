// src/modules/admin/AdminRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import RolesPage from './pages/general/RolesPage';
import DesignationPage from './pages/general/DesignationPage';
import GroupsPage from './pages/general/GroupsPage';
import DocumentsPage from './pages/client-and-partners/DocumentsPage';
import MsaAndSowPage from './pages/client-and-partners/MsaAndSow';
import FinanceFormPage from '@/components/forms/finance/FinanceFormPage';
import CompanyAndDocument from './pages/companies/CompanyAndDocuments';
import NotFoundPage from '@/components/common/NotFoundPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CompanyList from './pages/companies/CompanyList';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: { retry: 1, refetchOnWindowFocus: false },
//   },
// });

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="admin/roles" element={<RolesPage />} />
      <Route path="admin/groups" element={<GroupsPage />} />
      <Route path="admin/designation" element={<DesignationPage />} />
      <Route path="admin/companies/list" element={<CompanyList bizId={1} />} />
      <Route path="admin/finance/:mode/:id?" element={<FinanceFormPage />} />
      <Route path="admin/documents" element={<DocumentsPage />} />
      <Route path="admin/msa-and-sow" element={<MsaAndSowPage />} />
      <Route path="admin/show-documents" element={<CompanyAndDocument />} />
      {/* <Route path="admin/clients-partners" element={<ClientsPartnersPage />} />
        <Route path="admin/directory" element={<DirectoryPage />} />
        <Route path="admin/leaves" element={<LeavesPage />} />
        <Route path="admin/onboard" element={<OnboardPage />} />
        <Route path="admin/approve-leaves" element={<ApproveLeavesPage />} />
        <Route path="admin/timesheet" element={<TimesheetPage />} />
        <Route path="admin/expenses" element={<ExpensesPage />} />
        <Route path="/approve-clients" element={<ApproveClientsPage />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AdminRoutes;
