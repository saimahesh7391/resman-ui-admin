// resman-ui-admin/src/admin/sidebar.config.ts
export interface SidebarItem {
  label: string;
  path: string;
}

export interface SidebarSection {
  section: string;
  items: SidebarItem[];
}

export type SidebarConfig = SidebarSection[];

export const AdminSidebarItems: SidebarConfig = [
  {
    section: 'General',
    items: [
      { label: 'Roles', path: 'admin/roles' },
      { label: 'Groups', path: 'admin/groups' },
      { label: 'Designation', path: 'admin/designation' },
    ],
  },
  {
    section: 'Company',
    items: [
      { label: 'Manage Company', path: 'admin/companies' },
      { label: 'Manage Documents', path: 'admin/documents' },
    ],
  },
  {
    section: 'Client and Partners',
    items: [
      { label: 'Manage Clients/Partners', path: 'admin/clients-partners' },
      { label: 'MSA and SOW', path: 'admin/msa-and-sow' },
    ],
  },
  {
    section: 'Employee',
    items: [
      { label: 'Directory', path: 'admin/directory' },
      { label: 'Leaves', path: 'admin/leaves' },
    ],
  },
  {
    section: 'Approvals',
    items: [
      { label: 'Employee Onboard', path: 'admin/onboard' },
      { label: 'Leaves', path: 'admin/approve-leaves' },
      { label: 'Timesheet', path: 'admin/timesheet' },
      { label: 'Expenses', path: 'admin/expenses' },
      { label: 'Clients and Partners', path: 'admin/approve-clients' },
    ],
  },
];

export default AdminSidebarItems;
