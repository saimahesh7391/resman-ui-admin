// src/components/forms/legal/LegalFormPage.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { legalFields } from './legalFields';
import { legalSchema, type LegalFormValues } from './legalSchema';
import DynamicFields from '../DynamicFields';
import { Button } from '@mui/material';

const LegalFormPage = () => {
  const defaultValues: LegalFormValues = {
    file: undefined as unknown as File, // placeholder for default
    documentType: 'Contract',
    docProofId: '',
    receivedDate: '',
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LegalFormValues>({
    resolver: zodResolver(legalSchema),
    defaultValues,
  });

  const onSubmit = (data: LegalFormValues) => {
    console.log('📜 Legal Form Submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
      {legalFields.map((item) => (
        <DynamicFields
          key={item.name}
          item={item}
          control={control}
          errors={errors}
        />
      ))}
      <div className="col-span-2 flex justify-end mt-4">
        <Button type="submit" variant="contained" color="primary">
          Submit Legal Document
        </Button>
      </div>
    </form>
  );
};

export default LegalFormPage;
