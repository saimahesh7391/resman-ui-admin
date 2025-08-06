import { z } from 'zod';

export const msaSchema = z.object({
  file: z.any(),
  companyDocumentId: z.string().min(1, 'Document ID required'),
  details: z.string().optional(),
  documentType: z.literal('MSA'),
  startDate: z.string().min(1, 'Start date is required'),
  feePayTerm: z.enum(['30', '50', '60']),
  term: z.enum(['12', '24', '36']),
  c2hLockin: z.enum(['3', '6']),
  extendedTerm: z.enum(['6', '12']),
  c2hFee: z.string(),
  noticePeriod: z.enum(['15', '30', '60']),
  reimbursableExpenses: z.enum(['Yes', 'No']),
  backgroundCheck: z.enum(['Yes', 'No']),
  liabilityInsurance: z.enum(['Yes', 'No']),
  signoffDate: z.string(),
  volumeDiscount: z.enum(['Yes', 'No']),
});

export type MSAFormValues = z.infer<typeof msaSchema>;
