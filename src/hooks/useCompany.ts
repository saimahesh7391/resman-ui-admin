// src/hooks/useCompany.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import companyService from '../api/companyService';
import type { Company } from '../api/companyService';

export function useCompaniesByBizId(companyBizId: number) {
  return useQuery({
    queryKey: ['company', companyBizId],
    queryFn: async () => {
      const res = await companyService.getByBizId(companyBizId);
      if (res.error) throw { ...res };
      return res.data;
    },
    enabled: !!companyBizId,
  });
}

export function useCompanyById(id: number) {
  return useQuery({
    queryKey: ['company', id],
    queryFn: async () => {
      const res = await companyService.getById(id);
      if (res.error) throw { ...res };
      return res.data[0];
    },
    enabled: !!id,
  });
}

export function useCompanyCategories() {
  return useQuery({
    queryKey: ['companyCategories'],
    queryFn: async () => {
      const res = await companyService.getCompanyCategories();
      if (res.error) throw res.error;
      return res.data || [];
    },
  });
}

export function useCompanyTypes() {
  return useQuery({
    queryKey: ['companyTypes'],
    queryFn: async () => {
      const res = await companyService.getCompanyTypes();
      if (res.error) throw res.error;
      return res.data || [];
    },
  });
}

export function useSaveCompany() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: Partial<Company>) => {
      const res = await companyService.saveCompany(payload);
      if (res.error) throw { ...res };
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['company'] });
    },
  });
}

export function useUpdateCompany() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: Partial<Company>) => {
      const res = await companyService.updateCompany(payload);
      if (res.error) throw { ...res };
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['company'] });
    },
  });
}
