import { Box, Typography, Divider, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
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

export const CompanyDetailsPage = ({ company }: CompanyDetailsPageProps) => {
  const handleEditClick = () => {
    console.log('Edit button clicked');
  };

  return (
    <Box className="space-y-4">
      <Typography variant="h5" fontWeight="bold">
        {company.companyName}
      </Typography>
      <IconButton aria-label="edit" onClick={handleEditClick}>
        <EditIcon />
      </IconButton>
      <Typography variant="body1" color="text.secondary">
        {company.companyAboutus}
      </Typography>

      <Divider />

      <Box className="grid grid-cols-2 gap-4">
        <Box>
          <Typography fontWeight="bold">Company CIN:</Typography>
          <Typography>{company.companyCin}</Typography>
        </Box>

        <Box>
          <Typography fontWeight="bold">Business ID:</Typography>
          <Typography>{company.companyBizId}</Typography>
        </Box>

        <Box>
          <Typography fontWeight="bold">UUID:</Typography>
          <Typography>{company.companyUuid}</Typography>
        </Box>

        <Box>
          <Typography fontWeight="bold">Type ID:</Typography>
          <Typography>{company.companyTypeId}</Typography>
        </Box>

        <Box>
          <Typography fontWeight="bold">Category ID:</Typography>
          <Typography>{company.companyCategoryId}</Typography>
        </Box>

        {/* <Box>
          <Typography fontWeight="bold">Parent Company ID:</Typography>
          <Typography>{company.companyParentCompanyId}</Typography>
        </Box> */}

        <Box>
          <Typography fontWeight="bold">Active:</Typography>
          <Typography>{company.active === 'Y' ? 'Yes' : 'No'}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
