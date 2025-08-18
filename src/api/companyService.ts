import { apiClient } from './apiClient';

export interface ApiResponse<T> {
  apiMessageCode: string;
  apiMessage: string;
  httpCode: string;
  data: T[];
  error: string | null;
}

export type Company = {
  companyBizId: string;
  // companyUuid: string;
  companyName: string;
  companyAboutus: string;
  companyCin: string;
  companyTypeId: number;
  companyCategoryId: number;
  companyParentCompanyId: number;
  active: 'Y' | 'N';
};

export type CompanyCategory = {
  id: number;
  companyCategoryName: string;
};

export type CompanyType = {
  id: number;
  companyTypeName: string;
};

const companyService = {
  // Save new company
  saveCompany: (payload: Partial<Company>): Promise<ApiResponse<Company>> =>
    apiClient.post('/company/saveCompany', payload),

  // Get all companies by companyBizId
  getByBizId: (companyBizId: number): Promise<ApiResponse<Company>> =>
    apiClient.get(
      `/company/getCompanycompanyBizId?paramcompanyBizId=${companyBizId}`,
    ),

  // Get company by Id
  getById: (id: number): Promise<ApiResponse<Company>> =>
    apiClient.get(`/company/getById?pId=${id}`),

  // Update existing company
  updateCompany: (payload: Partial<Company>): Promise<ApiResponse<Company>> =>
    apiClient.post('/company/updateCompany', payload),

  getCompanyCategories: (): Promise<ApiResponse<CompanyCategory[]>> =>
    apiClient.get('/companycategory/getCompanyCategoryByAll'),

  getCompanyTypes: (): Promise<ApiResponse<CompanyType[]>> =>
    apiClient.get('/companytype/getCompanyTypeByAll'),
};

export default companyService;
