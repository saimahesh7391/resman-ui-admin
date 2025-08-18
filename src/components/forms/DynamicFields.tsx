import { Controller, type Control, type FieldErrors } from 'react-hook-form';
import {
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Select,
  FormControl,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface Option {
  label: string;
  value: string;
}

export type FieldType =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'dropdown'
  | 'checkbox'
  | 'textarea'
  | 'date'
  | 'file';

export interface FieldConfig {
  title: string;
  name: string;
  type: FieldType;
  placeholder?: string;
  options?: Option[];
  required?: boolean;
  className?: string;
  disabled?: boolean;
}

interface DynamicFieldProps {
  item: FieldConfig;
  control: Control<any>;
  errors: FieldErrors;
  disabled?: boolean;
}

const DynamicFields = ({
  item,
  control,
  errors,
  disabled,
}: DynamicFieldProps) => {
  const { title, type, name, placeholder, options, required, className } = item;

  const fieldError = errors[name as keyof typeof errors];

  return (
    <div className={`flex flex-col gap-2 ${className || ''}`}>
      {type !== 'checkbox' && (
        <label htmlFor={name} className="font-medium text-sm">
          {title}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${title} is required` : false,
        }}
        render={({ field }) => {
          switch (type) {
            case 'text':
            case 'email':
            case 'number':
            case 'password':
              return (
                <TextField
                  {...field}
                  type={type}
                  placeholder={placeholder}
                  fullWidth
                  disabled={disabled}
                  error={!!fieldError}
                  helperText={fieldError?.message as string}
                />
              );
            case 'textarea':
              return (
                <TextField
                  {...field}
                  multiline
                  rows={4}
                  placeholder={placeholder}
                  fullWidth
                  disabled={disabled}
                  error={!!fieldError}
                  helperText={fieldError?.message as string}
                />
              );
            case 'dropdown':
              return (
                <FormControl fullWidth error={!!fieldError} disabled={disabled}>
                  {/* <InputLabel>{title}</InputLabel> */}
                  <Select
                    {...field}
                    value={field.value || ''}
                    // label={title}
                  >
                    {options?.map((opt) => (
                      <MenuItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {fieldError && (
                    <FormHelperText>
                      {fieldError.message as string}
                    </FormHelperText>
                  )}
                </FormControl>
              );
            case 'checkbox':
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      checked={field.value}
                      disabled={disabled}
                    />
                  }
                  label={title}
                />
              );
            case 'date':
              return (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    {...field}
                    value={field.value || null}
                    onChange={(date) => field.onChange(date?.toISOString())}
                    disabled={disabled}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!fieldError,
                        helperText: fieldError?.message as string,
                      },
                    }}
                  />
                </LocalizationProvider>
              );
            default:
              return <></>;
          }
        }}
      />
    </div>
  );
};

export default DynamicFields;
