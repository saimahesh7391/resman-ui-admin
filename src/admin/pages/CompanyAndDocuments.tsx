import { useState } from 'react';
import {
  Tabs,
  Tab,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

import MSAFormPage from '@/components/forms/msa/MsaFormPage';
import SowFormPage from '@/components/forms/sow/SowFormPage';
import InsuranceFormPage from '@/components/forms/insurance/InsuranceFormPage';
import LegalFormPage from '@/components/forms/legal/legaFormPage';

const tabComponents = [
  {
    label: 'MSA',
    component: <MSAFormPage />,
  },
  {
    label: 'SOW',
    component: <SowFormPage />,
  },
  {
    label: 'Insurance',
    component: <InsuranceFormPage />,
  },
  {
    label: 'Legal',
    component: <LegalFormPage />,
  },
];

const CompanyAndDocument = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setActiveTab(0);
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Show Company & Document Details
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        scroll="paper"
      >
        <DialogTitle>Company & Document</DialogTitle>

        <DialogContent
          dividers
          sx={{
            minHeight: '500px',
          }}
        >
          <Box
            sx={{
              width: '100%',
            }}
          >
            <Tabs
              value={activeTab}
              onChange={(_, newValue) => setActiveTab(newValue)}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              sx={{ mb: 2 }}
            >
              {tabComponents.map((tab) => (
                <Tab key={tab.label} label={tab.label} />
              ))}
            </Tabs>

            <Box>{tabComponents[activeTab]?.component}</Box>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CompanyAndDocument;
