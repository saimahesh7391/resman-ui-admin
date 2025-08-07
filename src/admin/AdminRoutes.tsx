// src/modules/admin/AdminRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import RolesPage from './pages/RolesPage';
import DesignationPage from './pages/DesignationPage';
import GroupsPage from './pages/GroupsPage';
import CompaniesListPage from './pages/CompaniesListPage';
import DocumentsPage from './pages/DocumentsPage';
import MsaAndSowPage from './pages/MsaAndSow';
import CompanyFormPage from '@/components/forms/company/CompanyFormPage';
import FinanceFormPage from '@/components/forms/finance/FinanceFormPage';
import CompanyAndDocument from './pages/CompanyAndDocuments';
import NotFoundPage from '@/components/common/NotFoundPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, refetchOnWindowFocus: false },
  },
});

const AdminRoutes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/designation" element={<DesignationPage />} />
        <Route path="/companies" element={<CompaniesListPage />} />
        <Route path="/companies/:mode/:id?" element={<CompanyFormPage />} />
        <Route path="/finance/:mode/:id?" element={<FinanceFormPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/msa-and-sow" element={<MsaAndSowPage />} />
        <Route path="/show-documents" element={<CompanyAndDocument />} />
        {/* <Route path="/clients-partners" element={<ClientsPartnersPage />} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route path="/leaves" element={<LeavesPage />} />
        <Route path="/onboard" element={<OnboardPage />} />
        <Route path="/approve-leaves" element={<ApproveLeavesPage />} />
        <Route path="/timesheet" element={<TimesheetPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/approve-clients" element={<ApproveClientsPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default AdminRoutes;
