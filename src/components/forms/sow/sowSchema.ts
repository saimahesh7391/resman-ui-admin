import { z } from 'zod';

export const sowSchema = z.object({
  companyDocumentId: z.string().min(1, 'Document ID is required'),
  details: z.string().optional(),
  msaDocRef: z.string().min(1, 'MSA Reference is required'),
  documentType: z.literal('SOW'),
  startDate: z.string().min(1, 'Start date is required'),
  feePayTerm: z.enum(['As per MSA', 'Others']),
  endDate: z.string().min(1, 'End date is required'),
  noticePeriod: z.enum(['30 Days']),
  sowType: z.enum(['T&M Monthly']),
  rate: z.string().min(1, 'Rate is required'),
  signoffDate: z.string().optional(),
  poRef: z.string().optional(),
});

export type SowFormValues = z.infer<typeof sowSchema>;
