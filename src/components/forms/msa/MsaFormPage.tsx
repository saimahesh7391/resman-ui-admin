import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { msaFields } from './msaFields';
import { msaSchema, type MSAFormValues } from './msaSchema';
import DynamicFields from '../DynamicFields';
import { Button } from '@mui/material';

export default function MSAFormPage({
  defaultValues,
  mode = 'edit',
}: {
  defaultValues?: Partial<MSAFormValues>;
  mode?: 'edit' | 'view';
}) {
  const isView = mode === 'view';

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MSAFormValues>({
    resolver: zodResolver(msaSchema),
    defaultValues: {
      ...defaultValues,
      documentType: 'MSA',
    } as MSAFormValues,
  });

  const onSubmit = (data: MSAFormValues) => {
    console.log('🧾 MSA Form Submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
      {msaFields.map((field) => (
        <DynamicFields
          key={field.name}
          item={field}
          control={control}
          errors={errors}
          disabled={isView || field.disabled}
        />
      ))}

      {!isView && (
        <div className="col-span-2 flex justify-end mt-4">
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      )}
    </form>
  );
}
