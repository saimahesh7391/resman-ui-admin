import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type FinanceFormValues, financeSchema } from './financeSchema';
import { financeFields } from './financeFields';
import DynamicFields from '../DynamicFields';
import { Button } from '@mui/material';

const FinanceFormPage = ({
  mode = 'add',
  defaultValues,
  onSubmit,
}: {
  mode?: 'add' | 'edit';
  defaultValues?: FinanceFormValues;
  onSubmit?: (data: FinanceFormValues) => void;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FinanceFormValues>({
    resolver: zodResolver(financeSchema),
    defaultValues: defaultValues || {
      gstType: 'Regular',
      gstn: '',
      state: '',
      address: '',
      email: '',
      phone: '',
      isInternational: 'No',
      accountType: 'Savings',
      accountName: '',
      bankName: '',
      accountNumber: '',
      ifsc: '',
      swift: '',
      branchAddress: '',
    },
    mode: 'onChange',
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit || ((data) => console.log(data)))}
      className="grid grid-cols-2 gap-4"
    >
      {financeFields.map((item) => (
        <DynamicFields
          key={item.name}
          item={item}
          control={control}
          errors={errors}
        />
      ))}

      <div className="col-span-2 flex justify-end gap-4 mt-4">
        <Button variant="outlined" type="button">
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          disabled={mode === 'edit' && !isDirty}
        >
          {mode === 'edit' ? 'Update' : 'Submit'}
        </Button>
      </div>
    </form>
  );
};

export default FinanceFormPage;
