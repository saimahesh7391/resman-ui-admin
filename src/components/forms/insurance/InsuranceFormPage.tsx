// src/components/forms/insurance/InsuranceFormPage.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insuranceFields } from './insuranceFields';
import { insuranceSchema, type InsuranceFormValues } from './insuranceSchema';
import DynamicFields from '../DynamicFields';
import { Button } from '@mui/material';

const InsuranceFormPage = () => {
  const defaultValues: InsuranceFormValues = {
    generalPolicyNumber: '',
    generalIssuedBy: '',
    generalCoverage: '',
    generalPolicyType: 'Annual',
    generalStartDate: '',
    generalEndDate: '',
    eoPolicyNumber: '',
    eoIssuedBy: '',
    eoCoverage: '',
    eoPolicyType: 'Annual',
    eoStartDate: '',
    eoEndDate: '',
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InsuranceFormValues>({
    resolver: zodResolver(insuranceSchema),
    defaultValues,
  });

  const onSubmit = (data: InsuranceFormValues) => {
    console.log('✅ Insurance Form Submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
      {insuranceFields.map((item) => (
        <DynamicFields
          key={item.name}
          item={item}
          control={control}
          errors={errors}
        />
      ))}
      <div className="col-span-2 flex justify-end mt-4">
        <Button type="submit" variant="contained" color="primary">
          Submit Insurance
        </Button>
      </div>
    </form>
  );
};

export default InsuranceFormPage;
