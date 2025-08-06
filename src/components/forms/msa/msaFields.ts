// File: src/components/forms/msa/msaFields.ts
import type { FieldConfig } from '@/components/forms/DynamicFields';

export const msaFields = [
  {
    title: 'Upload File',
    name: 'file',
    type: 'file',
    isRequired: true,
    className: 'col-span-2',
  },
  {
    title: 'Company Document ID',
    name: 'companyDocumentId',
    type: 'text',
    placeholder: 'ABC#0012134',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Details',
    name: 'details',
    type: 'textarea',
    placeholder: 'Enter document details...',
    className: 'col-span-2',
  },
  {
    title: 'Document Type',
    name: 'documentType',
    type: 'text',
    isRequired: true,
    disabled: true,
    className: 'col-span-1',
  },

  // Divider – Additional Section
  {
    title: 'Start Date',
    name: 'startDate',
    type: 'date',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Fee Pay Term',
    name: 'feePayTerm',
    type: 'dropdown',
    options: [
      {
        label: '30 Days',
        value: '30',
      },
      {
        label: '50 Days',
        value: '50',
      },
      {
        label: '60 Days',
        value: '60',
      },
    ],
    className: 'col-span-1',
  },
  {
    title: 'Term (Months)',
    name: 'term',
    type: 'dropdown',
    options: [
      {
        label: '12',
        value: '12',
      },
      {
        label: '24',
        value: '24',
      },
      {
        label: '36',
        value: '36',
      },
    ],
    className: 'col-span-1',
  },
  {
    title: 'C2H Lock-in',
    name: 'c2hLockin',
    type: 'dropdown',
    options: [
      {
        label: '3 Months',
        value: '3',
      },
      {
        label: '6 Months',
        value: '6',
      },
    ],
    className: 'col-span-1',
  },
  {
    title: 'Extended Term (Months)',
    name: 'extendedTerm',
    type: 'dropdown',
    options: [
      {
        label: '6',
        value: '6',
      },
      {
        label: '12',
        value: '12',
      },
    ],
    className: 'col-span-1',
  },
  {
    title: 'C2H Fee %',
    name: 'c2hFee',
    type: 'number',
    placeholder: 'Enter fee %',
    className: 'col-span-1',
  },
  {
    title: 'Notice Period',
    name: 'noticePeriod',
    type: 'dropdown',
    options: [
      {
        label: '15 Days',
        value: '15',
      },
      {
        label: '30 Days',
        value: '30',
      },
      {
        label: '60 Days',
        value: '60',
      },
    ],
    className: 'col-span-1',
  },
  {
    title: 'Reimbursable Expenses',
    name: 'reimbursableExpenses',
    type: 'dropdown',
    options: [
      {
        label: 'Yes',
        value: 'Yes',
      },
      {
        label: 'No',
        value: 'No',
      },
    ],
    className: 'col-span-1',
  },
  {
    title: 'Background Check',
    name: 'backgroundCheck',
    type: 'dropdown',
    options: [
      {
        label: 'Yes',
        value: 'Yes',
      },
      {
        label: 'No',
        value: 'No',
      },
    ],
    className: 'col-span-1',
  },
  {
    title: 'Liability Insurance',
    name: 'liabilityInsurance',
    type: 'dropdown',
    options: [
      {
        label: 'Yes',
        value: 'Yes',
      },
      {
        label: 'No',
        value: 'No',
      },
    ],
    className: 'col-span-1',
  },
  {
    title: 'Signoff Date',
    name: 'signoffDate',
    type: 'date',
    className: 'col-span-1',
  },
  {
    title: 'Volume Discount',
    name: 'volumeDiscount',
    type: 'dropdown',
    options: [
      {
        label: 'Yes',
        value: 'Yes',
      },
      {
        label: 'No',
        value: 'No',
      },
    ],
    className: 'col-span-1',
  },
] satisfies FieldConfig[];
