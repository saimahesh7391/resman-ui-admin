import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

type CompanyAddressesDialogProps = {
  open: boolean;
  onClose: () => void;
  company: {
    companyName: string;
  };
};

export default function CompanyAddressesDialog({ open, onClose, company }: CompanyAddressesDialogProps) {
  
    console.log('Company Addresses Dialog opened for:', company);
  
    return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Company Addresses</DialogTitle>
      <DialogContent>
        <Typography>Address details for {company.companyName} go here...</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
