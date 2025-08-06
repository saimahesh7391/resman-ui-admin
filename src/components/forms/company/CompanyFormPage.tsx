// File: /pages/companies/CompanyFormPage.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { companyFields } from '@/components/forms/company/companyFields';
import {
  companySchema,
  type CompanyFormValues,
} from '@/components/forms/company/companySchema';
import DynamicFields from '@/components/forms/DynamicFields';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useMemo } from 'react';

type Props = {
  mode?: 'add' | 'edit';
  onSuccess?: () => void;
  defaultValues?: CompanyFormValues; // ✅ Add this line
};

const CompanyFormPage = ({ mode, onSuccess, defaultValues }: Props) => {
  const params = useParams();
  const navigate = useNavigate();

  const isEdit = mode === 'edit' || params.mode === 'edit';

  const resolvedDefaults = useMemo<CompanyFormValues>(() => {
    return (
      defaultValues ||
      (isEdit
        ? {
            companyId: 'COM-00001',
            companyName: 'Microsoft Inc',
            companyType: 'Client',
            companyCategory: 'Enterprise',
            buildingName: 'Building 7',
            address1: '1 Microsoft Way',
            area: 'Redmond',
            city: 'Seattle',
            state: 'Washington',
            country: 'USA',
            pincode: '98052',
            addonInfo: 'Strategic partner, requires NDA',
          }
        : {
            companyId: '',
            companyName: '',
            companyType: 'Client',
            companyCategory: 'Startup',
            buildingName: '',
            address1: '',
            area: '',
            city: '',
            state: '',
            country: '',
            pincode: '',
            addonInfo: '',
          })
    );
  }, [defaultValues, isEdit]);

  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companySchema),
    defaultValues: resolvedDefaults,
    mode: 'onChange',
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = form;

  useEffect(() => {
    reset(resolvedDefaults);
  }, [reset, mode, resolvedDefaults]);

  const onSubmit = (data: CompanyFormValues) => {
    if (isEdit) {
      console.log('Updating company:', data);
    } else {
      console.log('Creating new company:', data);
    }

    if (onSuccess) {
      onSuccess(); // Close dialog
    } else {
      navigate('/companies'); // Fallback: navigate back
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-4 p-4"
    >
      {companyFields.map((item: any) => (
        <DynamicFields
          key={item.name}
          item={item}
          control={control}
          errors={errors}
          disabled={item.name === 'companyId'} // 👈 make ID read-only
        />
      ))}

      <div className="col-span-2 flex justify-end gap-4 mt-4">
        <Button type="submit" variant="contained" disabled={isEdit && !isDirty}>
          {isEdit ? 'Update' : 'Submit'}
        </Button>
        <Button
          variant="outlined"
          type="reset"
          onClick={() => navigate('/auth/companies')}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default CompanyFormPage;
