import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tabs,
  Tab,
} from '@mui/material';
import CompanyFormPage from '@/components/forms/company/CompanyFormPage';
import FinanceFormPage from '@/components/forms/finance/FinanceFormPage';
import DocumentsPage from '../client-and-partners/DocumentsPage';
import MsaAndSowPage from '../client-and-partners/MsaAndSow';
import { companies, columns } from '@/components/constants/companies';
import IntelligentTable from '@/components/common/IntelligentTable';

export default function CompaniesListPage() {
  const [filteredCompanies, setFilteredCompanies] = useState(companies);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [, setOpenDialog] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCompany] = useState<any>(null);

  const handleSearch = (searchText: string) => {
    const lowerSearch = searchText.toLowerCase();

    const filtered = companies.filter((company) =>
      Object.values(company).some((value) =>
        String(value).toLowerCase().includes(lowerSearch),
      ),
    );

    setFilteredCompanies(filtered);
  };

  const handleAddClick = () => {
    // navigate('/admin/companies/add');
    setOpenAddDialog(true);
  };
  const handleDialogClose = () => {
    setOpenAddDialog(false);
  };

  return (
    <div>
      <IntelligentTable
        columns={columns}
        rows={filteredCompanies}
        onSearch={handleSearch}
        onAddClick={handleAddClick}
        enableSearch
        enableAdd
      />

      <Dialog
        open={openAddDialog}
        onClose={handleDialogClose}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle>
          {/* {selectedCompany ? `Edit Company: ${selectedCompany.companyName}` : "Add New Company"} */}
        </DialogTitle>

        <Tabs
          value={activeTab}
          onChange={(_, newVal) => setActiveTab(newVal)}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Company Details" />
          <Tab label="Finance" />
          <Tab label="MSA & SOW" />
          <Tab label="Documents" />
        </Tabs>

        <DialogContent dividers>
          {activeTab === 0 && (
            <CompanyFormPage
              mode={selectedCompany ? 'edit' : 'add'}
              defaultValues={selectedCompany}
              onSuccess={() => {
                setOpenDialog(false);
              }}
            />
          )}

          {activeTab === 1 && (
            <FinanceFormPage
              mode={selectedCompany ? 'edit' : 'add'}
              defaultValues={
                selectedCompany
                  ? {
                      gstType: 'Regular',
                      gstn: '22AAAAA0000A1Z5',
                      state: 'Karnataka',
                      address: 'Some Address',
                      email: 'accounts@company.com',
                      phone: '+91-9876543210',
                      isInternational: 'No',
                      accountType: 'Current',
                      accountName: selectedCompany.companyName,
                      bankName: 'State Bank of India',
                      accountNumber: '123456789',
                      ifsc: 'SBIN0001234',
                      swift: 'SBININBBXXX',
                      branchAddress: 'MG Road Branch',
                    }
                  : undefined
              }
              onSubmit={(data) => {
                console.log('💰 Finance Updated:', data);
              }}
            />
          )}

          {activeTab === 2 && <MsaAndSowPage />}
          {activeTab === 3 && <DocumentsPage />}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
