// File: /components/forms/finance/financeFields.ts
// File: /components/forms/finance/financeFields.ts
import type { FieldConfig } from '../DynamicFields';

export const financeFields: FieldConfig[] = [
  // GST Section
  {
    title: 'GST Type',
    name: 'gstType',
    type: 'dropdown',
    options: [
      {
        label: 'Regular',
        value: 'Regular',
      },
      {
        label: 'Composition',
        value: 'Composition',
      },
      {
        label: 'Unregistered',
        value: 'Unregistered',
      },
    ],
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'GSTN',
    name: 'gstn',
    type: 'text',
    placeholder: 'GST Number',
    isRequired: false,
    className: 'col-span-1',
  },
  {
    title: 'State',
    name: 'state',
    type: 'text',
    placeholder: 'State name',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Address',
    name: 'address',
    type: 'textarea',
    placeholder: 'Enter registered address',
    isRequired: true,
    className: 'col-span-2',
  },
  {
    title: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter email',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Phone',
    name: 'phone',
    type: 'text',
    placeholder: 'Enter phone number',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Is International',
    name: 'isInternational',
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
    isRequired: true,
    className: 'col-span-1',
  },

  // Bank Details
  {
    title: 'Account Type',
    name: 'accountType',
    type: 'dropdown',
    options: [
      {
        label: 'Savings',
        value: 'Savings',
      },
      {
        label: 'Current',
        value: 'Current',
      },
    ],
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Account Name',
    name: 'accountName',
    type: 'text',
    placeholder: 'Account holder name',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Bank Name',
    name: 'bankName',
    type: 'text',
    placeholder: 'Bank name',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Account Number',
    name: 'accountNumber',
    type: 'text',
    placeholder: 'Account number',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'IFSC Code',
    name: 'ifsc',
    type: 'text',
    placeholder: 'IFSC Code',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'SWIFT Code',
    name: 'swift',
    type: 'text',
    placeholder: 'SWIFT Code',
    isRequired: false,
    className: 'col-span-1',
  },
  {
    title: 'Branch Address',
    name: 'branchAddress',
    type: 'textarea',
    placeholder: 'Branch or IFSC address',
    isRequired: true,
    className: 'col-span-2',
  },
];
