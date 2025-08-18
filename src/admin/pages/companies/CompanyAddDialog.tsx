import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  companySchema,
  companyFormDefaultValues,
  type CompanyFormValues,
} from '@/components/forms/company/companySchema';
import { companyFields } from '@/components/forms/company/companyFields';
import DynamicFields, {
  type FieldConfig,
} from '@/components/forms/DynamicFields';
import {
  useSaveCompany,
  useCompanyTypes,
  useCompanyCategories,
} from '@/hooks/useCompany';
import { useState, useEffect } from 'react';

type CompanyDialogProps = {
  open: boolean;
  onClose: () => void;
  mode: 'add' | 'edit';
  company?: CompanyFormValues; // pre-filled data in edit/view mode
};

export default function CompanyAddDialog({
  open,
  onClose,
  mode,
  company,
}: CompanyDialogProps) {
  const { data: companyTypes = [] } = useCompanyTypes();
  const { data: companyCategories = [] } = useCompanyCategories();
  const { mutate: saveCompany, isPending } = useSaveCompany();

  const [fields, setFields] = useState<FieldConfig[]>(companyFields);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(companySchema),
    defaultValues: companyFormDefaultValues,
  });

  useEffect(() => {
    setFields((prev) =>
      prev.map((field) => {
        if (field.name === 'companyTypeId') {
          return {
            ...field,
            options: companyTypes.map((t: any) => ({
              label: t.companyTypeName,
              value: String(t.id), // ✅ convert id to string for zod validation
            })),
          };
        }
        if (field.name === 'companyCategoryId') {
          return {
            ...field,
            options: companyCategories.map((c: any) => ({
              label: c.companyCategoryName,
              value: String(c.id),
            })),
          };
        }
        return field;
      }),
    );
  }, [companyTypes, companyCategories]);

  const onSubmit = (data: any) => {
    console.log('Submitting company data:', data);
    // Call the saveCompany mutation with the form data
    saveCompany(data, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Add Company
          <IconButton
            onClick={handleClose}
            sx={{
              '&:hover': {
                color: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((field) => (
              <DynamicFields
                key={field.name}
                item={field}
                control={control}
                errors={errors}
              />
            ))}
          </div>
        </DialogContent>
        <DialogActions sx={{ p: 2, gap: 2 }}>
          <Button onClick={handleClose} variant="outlined" color="inherit">
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isPending}
          >
            {isPending ? 'Saving...' : 'Save'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
