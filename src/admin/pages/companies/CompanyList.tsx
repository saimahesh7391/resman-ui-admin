import IntelligentTable from '@/components/common/IntelligentTable';
import LoadingScreen from '@/components/common/LoadingScreen';
import { companyColumns } from '@/components/constants/companies';
import { useCompaniesByBizId } from '@/hooks/useCompany';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import MsaAndSowPage from '../client-and-partners/MsaAndSow';
import DocumentsPage from '../client-and-partners/DocumentsPage';
import CompanyAddressListPage from './CompanyAddressListPage';
import CompanyAddDialog from './CompanyAddDialog';
import { CompanyDetailsPage } from './CompanyDetailsPage';

export default function CompanyList({ bizId }: { bizId: number }) {
  const { data: companies, isLoading } = useCompaniesByBizId(bizId);

  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState<any | null>(null);

  console.log('Companies:', companies);
  if (isLoading) return <LoadingScreen />;

  const handleSearch = (searchText: string) => {
    // Implement search logic here
    console.log('Search:', searchText);
  };

  const handleAddDialogOpen = () => {
    setOpenAddDialog(true);
  };

  const handleViewDialogOpen = () => {
    setOpenViewDialog(true);
  };

  const handleViewDialogClose = () => {
    setOpenViewDialog(false);
  };

  const handleAddDialogClose = () => {
    setOpenAddDialog(false);
  };

  // ✅ row click -> open dialog
  const handleRowClick = (company: any) => {
    setSelectedCompany(company);
    setOpenViewDialog(true);
    setActiveTab(0);
  };

  return (
    <div>
      <IntelligentTable
        columns={companyColumns}
        rows={companies || []}
        onSearch={handleSearch}
        onAddClick={handleAddDialogOpen}
        onRowClick={handleRowClick}
        enableSearch
        enableAdd
      />

      <Dialog
        open={openViewDialog}
        onClose={handleViewDialogClose}
        fullWidth
        maxWidth="lg"
      >
        {selectedCompany && (
          <>
            <Tabs
              value={activeTab}
              onChange={(_, newVal) => setActiveTab(newVal)}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Company Details" />
              <Tab label="Company Addresses" />
              <Tab label="MSA & SOW" />
              <Tab label="Documents" />
            </Tabs>

            <DialogContent dividers>
              {activeTab === 0 && (
                <CompanyDetailsPage company={selectedCompany} />
              )}
              {activeTab === 1 && (
                <CompanyAddressListPage company={selectedCompany} />
              )}
              {activeTab === 2 && <MsaAndSowPage />}
              {activeTab === 3 && <DocumentsPage />}
            </DialogContent>

            <DialogActions>
              <Button onClick={handleViewDialogClose}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
      <CompanyAddDialog
        open={openAddDialog}
        onClose={handleAddDialogClose}
        mode="add"
      />
    </div>
  );
}
