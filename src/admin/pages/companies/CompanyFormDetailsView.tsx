import {
  Box,
  Typography,
  Divider,
  IconButton,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import DeleteIcon from '@mui/icons-material/Delete';

interface CompanyDetailsPageProps {
  company: {
    companyName: string;
    companyAboutus: string;
    companyCin: string;
    companyBizId: string;
    companyUuid: string;
    companyTypeId: string;
    companyCategoryId: string;
    companyParentCompanyId: string;
    active: string;
  };
}

export const CompanyDetailsFormView = ({
  company,
}: CompanyDetailsPageProps) => {
  const handleEditClick = () => {
    console.log('Edit button clicked');
  };

  return (
    <Box className="space-y-4">
      <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div></div>
        <Tooltip title={'Delete'}>
          <IconButton>
            <DeleteIcon sx={{ color: 'error.main', fontSize: 30 }} />
          </IconButton>
        </Tooltip>
        <Tooltip title={company.active === 'N' ? 'Set Inactive' : 'Set Active'}>
          <IconButton>
            {company.active === 'N' ? (
              <ToggleOnIcon sx={{ color: 'success.main', fontSize: 30 }} />
            ) : (
              <ToggleOffIcon sx={{ color: 'error.main', fontSize: 30 }} />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title={company.active === 'Y' ? 'Set Inactive' : 'Set Active'}>
          <IconButton>
            {company.active === 'Y' ? (
              <ToggleOnIcon sx={{ color: 'success.main', fontSize: 30 }} />
            ) : (
              <ToggleOffIcon sx={{ color: 'error.main', fontSize: 30 }} />
            )}
          </IconButton>
        </Tooltip>
        <IconButton aria-label="edit" onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
      </Stack>

      <Divider />

      <Box className="grid grid-cols-2 gap-4">
        <TextField
          label="Company Name"
          value={company.companyName}
          InputProps={{ readOnly: true }}
          fullWidth
        />

        <TextField
          label="About Us"
          value={company.companyAboutus}
          InputProps={{ readOnly: true }}
          fullWidth
          multiline
          minRows={2}
        />

        <TextField
          label="Company CIN"
          value={company.companyCin}
          InputProps={{ readOnly: true }}
          fullWidth
        />

        <TextField
          label="Business ID"
          value={company.companyBizId}
          InputProps={{ readOnly: true }}
          fullWidth
        />

        <TextField
          label="UUID"
          value={company.companyUuid}
          InputProps={{ readOnly: true }}
          fullWidth
        />

        <TextField
          label="Type ID"
          value={company.companyTypeId}
          InputProps={{ readOnly: true }}
          fullWidth
        />

        <TextField
          label="Category ID"
          value={company.companyCategoryId}
          InputProps={{ readOnly: true }}
          fullWidth
        />

        <TextField
          label="Active"
          value={company.active === 'Y' ? 'Yes' : 'No'}
          InputProps={{ readOnly: true }}
          fullWidth
        />
      </Box>
    </Box>
  );
};
