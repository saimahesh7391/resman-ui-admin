// File: /components/forms/company/companyFields.ts
// File: /components/forms/company/companyFields.ts
import type { FieldConfig } from '../DynamicFields';

export const companyFields: FieldConfig[] = [
  // 🏢 Company Info
  {
    title: 'Company ID',
    name: 'companyId',
    type: 'text',
    placeholder: 'Auto-generated',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Company Name',
    name: 'companyName',
    type: 'text',
    placeholder: 'Enter company name',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Company Type',
    name: 'companyType',
    type: 'dropdown',
    options: [
      {
        label: 'Client',
        value: 'Client',
      },
      {
        label: 'Partner',
        value: 'Partner',
      },
      {
        label: 'Internal',
        value: 'Internal',
      },
    ],
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Company Category',
    name: 'companyCategory',
    type: 'dropdown',
    options: [
      {
        label: 'Startup',
        value: 'Startup',
      },
      {
        label: 'Enterprise',
        value: 'Enterprise',
      },
      {
        label: 'Government',
        value: 'Government',
      },
    ],
    isRequired: true,
    className: 'col-span-1',
  },

  // 📍 Address Section
  {
    title: 'Building Name',
    name: 'buildingName',
    type: 'text',
    placeholder: 'Building / Flat / Block',
    isRequired: false,
    className: 'col-span-1',
  },
  {
    title: 'Address Line 1',
    name: 'address1',
    type: 'textarea',
    placeholder: 'Street name, locality',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Area',
    name: 'area',
    type: 'text',
    placeholder: 'Enter area',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'City',
    name: 'city',
    type: 'text',
    placeholder: 'Enter city',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'State',
    name: 'state',
    type: 'text',
    placeholder: 'Enter state',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Country',
    name: 'country',
    type: 'text',
    placeholder: 'Enter country',
    isRequired: true,
    className: 'col-span-1',
  },
  {
    title: 'Pincode',
    name: 'pincode',
    type: 'number',
    placeholder: 'Enter pincode',
    isRequired: true,
    className: 'col-span-1',
  },

  // 🧾 Addon Info
  {
    title: 'Additional Info',
    name: 'addonInfo',
    type: 'textarea',
    placeholder: 'Any remarks or special info',
    isRequired: false,
    className: 'col-span-2',
  },
];
