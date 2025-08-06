// src/components/forms/insurance/insuranceSchema.ts
import { z } from 'zod';

export const insuranceSchema = z.object({
  generalPolicyNumber: z.string().min(1, 'Required'),
  generalIssuedBy: z.string().min(1, 'Required'),
  generalCoverage: z.string().min(1, 'Required'),
  generalPolicyType: z.enum(['Annual', 'Temporary', 'Comprehensive']),
  generalStartDate: z.string().min(1, 'Start Date is required'),
  generalEndDate: z.string().min(1, 'End Date is required'),

  eoPolicyNumber: z.string().min(1, 'Required'),
  eoIssuedBy: z.string().min(1, 'Required'),
  eoCoverage: z.string().min(1, 'Required'),
  eoPolicyType: z.enum(['Annual', 'Temporary', 'Comprehensive']),
  eoStartDate: z.string().min(1, 'Start Date is required'),
  eoEndDate: z.string().min(1, 'End Date is required'),
});

export type InsuranceFormValues = z.infer<typeof insuranceSchema>;
