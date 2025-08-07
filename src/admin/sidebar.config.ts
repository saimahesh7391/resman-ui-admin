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
      { label: 'Roles', path: 'roles' },
      { label: 'Groups', path: 'groups' },
      { label: 'Designation', path: 'designation' },
    ],
  },
  {
    section: 'Company',
    items: [
      { label: 'Manage Company', path: 'companies' },
      { label: 'Manage Documents', path: 'documents' },
    ],
  },
  {
    section: 'Client and Partners',
    items: [
      { label: 'Manage Clients/Partners', path: 'clients-partners' },
      { label: 'MSA and SOW', path: 'msa-and-sow' },
    ],
  },
  {
    section: 'Employee',
    items: [
      { label: 'Directory', path: 'directory' },
      { label: 'Leaves', path: 'leaves' },
    ],
  },
  {
    section: 'Approvals',
    items: [
      { label: 'Employee Onboard', path: 'onboard' },
      { label: 'Leaves', path: 'approve-leaves' },
      { label: 'Timesheet', path: 'timesheet' },
      { label: 'Expenses', path: 'expenses' },
      { label: 'Clients and Partners', path: 'approve-clients' },
    ],
  },
];

export default AdminSidebarItems;
