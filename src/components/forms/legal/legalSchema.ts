// src/components/forms/legal/legalSchema.ts
import { z } from 'zod';

export const legalSchema = z.object({
  file: z.instanceof(File, {
    message: 'Legal file is required',
  }),
  documentType: z.enum(['Contract', 'NDA', 'MoU', 'Other']),
  docProofId: z.string().min(1, 'Document Proof ID is required'),
  receivedDate: z.string().min(1, 'Received date is required'),
});

export type LegalFormValues = z.infer<typeof legalSchema>;
