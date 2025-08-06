// src/components/forms/legal/legalFields.ts

import type { FieldConfig } from '../DynamicFields';

export const legalFields: FieldConfig[] = [
  {
    title: 'Upload Legal File',
    name: 'file',
    type: 'file',
    isRequired: true,
    className: 'col-span-2',
  },
  {
    title: 'Document Type',
    name: 'documentType',
    type: 'dropdown',
    isRequired: true,
    className: 'col-span-1',
    options: [
      {
        label: 'Contract',
        value: 'Contract',
      },
      {
        label: 'NDA',
        value: 'NDA',
      },
      {
        label: 'MoU',
        value: 'MoU',
      },
      {
        label: 'Other',
        value: 'Other',
      },
    ],
  },
  {
    title: 'Document Proof ID',
    name: 'docProofId',
    type: 'text',
    placeholder: 'e.g. NA or LSJD1232J',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Received Date',
    name: 'receivedDate',
    type: 'date',
    isRequired: true,
    className: 'col-span-1',
  },
];
