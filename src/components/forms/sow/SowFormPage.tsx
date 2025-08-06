import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sowSchema, type SowFormValues } from './sowSchema';
import { sowFields } from './sowFields';
import { Button } from '@mui/material';
import DynamicFields from '../DynamicFields';

const SowFormPage = () => {
  const defaultValues: SowFormValues = {
    companyDocumentId: '',
    details: '',
    msaDocRef: '',
    documentType: 'SOW',
    startDate: '',
    feePayTerm: 'As per MSA',
    endDate: '',
    noticePeriod: '30 Days',
    sowType: 'T&M Monthly',
    rate: '',
    signoffDate: '',
    poRef: '',
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SowFormValues>({
    resolver: zodResolver(sowSchema),
    defaultValues,
  });

  const onSubmit = (data: SowFormValues) => {
    console.log('SOW form submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
      {sowFields.map((item) => (
        <DynamicFields
          key={item.name}
          item={item}
          control={control}
          errors={errors}
        />
      ))}
      <div className="col-span-2 flex justify-end gap-4 mt-4">
        <Button type="submit" variant="contained">
          Submit SOW
        </Button>
      </div>
    </form>
  );
};

export default SowFormPage;
