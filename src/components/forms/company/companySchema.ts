import { z } from 'zod';

export const companySchema = z.object({
  companyBizId: z.string().min(1, 'Company business ID is required'),
  companyCin: z.string().min(1, 'Company CIN is required'),
  // companyParentCompanyId: z
  //   .string()
  //   .min(1, 'Company parent company ID is required'),
  companyName: z.string().min(1, 'Company name is required'),
  companyAboutus: z.string().min(1, 'About Us is required'),
  companyTypeId: z.string().min(1, 'Company type is required'), // comes from dropdown
  companyCategoryId: z.string().min(1, 'Company category is required'), // comes from dropdown
  active: z.enum(['Y', 'N'], {
    error: 'Active status is required',
  }),
});

export type CompanyFormValues = z.infer<typeof companySchema>;

export const companyFormDefaultValues: CompanyFormValues = {
  companyBizId: '',
  companyCin: '',
  // companyParentCompanyId: '',
  companyName: '',
  companyAboutus: '',
  companyTypeId: '', // dropdown selected ID
  companyCategoryId: '', // dropdown selected ID
  active: 'Y',
};
