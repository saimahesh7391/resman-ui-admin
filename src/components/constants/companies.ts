import type { Column } from '../common/IntelligentTable';

export const companyColumns: Column<any>[] = [
  {
    key: 'companyBizId',
    label: 'Company ID',
  },
  {
    key: 'companyName',
    label: 'Company Name',
  },
  {
    key: 'companyCin',
    label: 'CIN',
  },
  {
    key: 'companyTypeId',
    label: 'Company Type',
  },
  {
    key: 'active',
    label: 'Status',
  },
];
