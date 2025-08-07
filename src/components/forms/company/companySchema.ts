// File: /components/forms/company/companySchema.ts
import { z } from 'zod';

export const companySchema = z.object({
  companyId: z.string().min(1, 'Company ID is required'),
  companyName: z.string().min(1, 'Company Name is required'),
  // companyType: z.enum(['Client', 'Partner', 'Internal'], {
  //   required_error: 'Company Type is required',
  // }),
  // companyCategory: z.enum(['Startup', 'Enterprise', 'Government'], {
  //   required_error: 'Company Category is required',
  // }),
  buildingName: z.string().optional(),
  address1: z.string().min(1, 'Address Line 1 is required'),
  area: z.string().min(1, 'Area is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  country: z.string().min(1, 'Country is required'),
  pincode: z.string().regex(/^\d{4,10}$/, 'Enter a valid pincode'),
  addonInfo: z.string().optional(),
});

export type CompanyFormValues = z.infer<typeof companySchema>;
