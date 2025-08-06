// src/components/forms/insurance/insuranceFields.ts

import type { FieldConfig } from '../DynamicFields';

export const insuranceFields: FieldConfig[] = [
  // Section 1: General Liability
  {
    title: 'General Liability',
    name: 'header1',
    type: 'text',
    className: 'col-span-2 font-semibold text-lg text-gray-700',
    isRequired: false,
  },
  {
    title: 'Policy Number',
    name: 'generalPolicyNumber',
    type: 'text',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Issued By',
    name: 'generalIssuedBy',
    type: 'text',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Coverage Amount (₹ or $)',
    name: 'generalCoverage',
    type: 'text',
    placeholder: 'e.g. ₹2,32,232 or $500,000',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Policy Type',
    name: 'generalPolicyType',
    type: 'dropdown',
    options: [
      {
        label: 'Annual',
        value: 'Annual',
      },
      {
        label: 'Temporary',
        value: 'Temporary',
      },
      {
        label: 'Comprehensive',
        value: 'Comprehensive',
      },
    ],
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Start Date',
    name: 'generalStartDate',
    type: 'date',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'End Date',
    name: 'generalEndDate',
    type: 'date',
    isRequired: true,
    className: 'col-span-1',
  },

  // Section 2: Errors and Omissions Liability
  {
    title: 'Errors and Omissions Liability',
    name: 'header2',
    type: 'text',
    className: 'col-span-2 font-semibold text-lg text-gray-700',
    isRequired: false,
  },
  {
    title: 'Policy Number',
    name: 'eoPolicyNumber',
    type: 'text',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Issued By',
    name: 'eoIssuedBy',
    type: 'text',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Coverage Amount (₹ or $)',
    name: 'eoCoverage',
    type: 'text',
    placeholder: 'e.g. ₹5,00,000 or $1,000,000',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Policy Type',
    name: 'eoPolicyType',
    type: 'dropdown',
    options: [
      {
        label: 'Annual',
        value: 'Annual',
      },
      {
        label: 'Temporary',
        value: 'Temporary',
      },
      {
        label: 'Comprehensive',
        value: 'Comprehensive',
      },
    ],
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Start Date',
    name: 'eoStartDate',
    type: 'date',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'End Date',
    name: 'eoEndDate',
    type: 'date',
    isRequired: true,
    className: 'col-span-1',
  },
];
