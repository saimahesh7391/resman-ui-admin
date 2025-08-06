import { z } from 'zod';

export const financeSchema = z.object({
  gstType: z.enum(['Regular', 'Composition', 'Unregistered']),
  gstn: z.string().optional(),
  state: z.string().min(1, 'State is required'),
  address: z.string().min(1, 'Address is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  isInternational: z.enum(['Yes', 'No']),

  accountType: z.enum(['Savings', 'Current']),
  accountName: z.string().min(1, 'Account Name is required'),
  bankName: z.string().min(1, 'Bank Name is required'),
  accountNumber: z.string().min(1, 'Account Number is required'),
  ifsc: z.string().min(1, 'IFSC Code is required'),
  swift: z.string().optional(),
  branchAddress: z.string().min(1, 'Branch Address is required'),
});

export type FinanceFormValues = z.infer<typeof financeSchema>;
