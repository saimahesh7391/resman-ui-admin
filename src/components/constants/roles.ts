import type { Column } from '../common/IntelligentTable';

export const roles = [
  {
    id: 'All read',
    details: 'Read any field/record',
    groups: 'C-Admin, C-Manager',
    status: 'Active',
    hours: 36,
  },
  {
    id: 'All write',
    details: 'Write any field/record',
    groups: 'C-Admin, C-Manager',
    status: 'Active',
    hours: 40,
  },
  {
    id: 'All update',
    details: 'Update any field/record',
    groups: 'C-Admin',
    status: 'Active',
    hours: 10,
  },
  {
    id: 'All Deactivate',
    details: 'Deactivate any record',
    groups: 'C-Admin',
    status: 'Disabled',
    hours: 20,
  },
  {
    id: 'Read – Finance',
    details: 'Read Finance data',
    groups: 'Finance-Manager, Finance-Lead',
    status: 'Active',
    hours: 60,
  },
];

export const columns: Column<(typeof roles)[0]>[] = [
  {
    key: 'id',
    label: 'Role Id',
  },
  {
    key: 'details',
    label: 'Role Details',
  },
  {
    key: 'groups',
    label: 'Groups',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'hours',
    label: 'Hours',
  },
];
