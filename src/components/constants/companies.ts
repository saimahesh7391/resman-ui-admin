import type { Column } from '../common/IntelligentTable';

// Dummy company data
export const companies = [
  {
    companyId: 'COM-001',
    companyName: 'TechNova Solutions',
    location: 'Karnataka, India',
    companyType: 'Client',
    status: 'Active',
  },
  {
    companyId: 'COM-002',
    companyName: 'Vertex Corp',
    location: 'California, USA',
    companyType: 'Vendor',
    status: 'Inactive',
  },
  {
    companyId: 'COM-003',
    companyName: 'InfyGroup Pvt Ltd',
    location: 'Telangana, India',
    companyType: 'Both',
    status: 'Active',
  },
  {
    companyId: 'COM-004',
    companyName: 'VisionSoft Ltd',
    location: 'Ontario, Canada',
    companyType: 'Client',
    status: 'Active',
  },
  {
    companyId: 'COM-005',
    companyName: 'ZenithWorks',
    location: 'Berlin, Germany',
    companyType: 'Vendor',
    status: 'Inactive',
  },
];

// Columns for IntelligentTable
export const columns: Column<(typeof companies)[0]>[] = [
  {
    key: 'companyId',
    label: 'Company ID',
  },
  {
    key: 'companyName',
    label: 'Company Name',
  },
  {
    key: 'location',
    label: 'Location (State, Country)',
  },
  {
    key: 'companyType',
    label: 'Company Type',
  },
  {
    key: 'status',
    label: 'Status',
  },
];
