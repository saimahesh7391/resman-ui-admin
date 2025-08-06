// File: /components/forms/sow/sowFields.ts

import type { FieldConfig } from '../DynamicFields';

export const sowFields: FieldConfig[] = [
  // {
  //   title: 'Upload File',
  //   name: 'file',
  //   type: 'file',
  //   isRequired: true,
  //   className: 'col-span-2',
  // },
  {
    title: 'Company Document ID',
    name: 'companyDocumentId',
    type: 'text',
    placeholder: 'ABC#002323',
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
    title: 'MSA Doc Ref',
    name: 'msaDocRef',
    type: 'text',
    placeholder: 'ABC#23093',
    className: 'col-span-1',
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
        label: 'As per MSA',
        value: 'msa',
      },
      {
        label: 'Others',
        value: 'others',
      },
    ],
    className: 'col-span-1',
  },
  {
    title: 'End Date',
    name: 'endDate',
    type: 'date',
    className: 'col-span-1',
  },
  {
    title: 'Notice Period',
    name: 'noticePeriod',
    type: 'dropdown',
    options: [
      {
        label: '30 Days',
        value: '30',
      },
    ],
    className: 'col-span-1',
  },
  {
    title: 'SOW Type',
    name: 'sowType',
    type: 'dropdown',
    options: [
      {
        label: 'T&M Month',
        value: 'tm_month',
      },
    ],
    className: 'col-span-1',
  },
  {
    title: 'Rate',
    name: 'rate',
    type: 'number',
    placeholder: '70000',
    className: 'col-span-1',
  },
  {
    title: 'Signoff Date',
    name: 'signoffDate',
    type: 'date',
    className: 'col-span-1',
  },
  {
    title: 'PO Ref#',
    name: 'poRef',
    type: 'text',
    placeholder: '2309049',
    className: 'col-span-1',
  },
];
