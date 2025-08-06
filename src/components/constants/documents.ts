import type { Column } from '../common/IntelligentTable';

// Dummy data
export const documents = [
  {
    documentId: 'DOC-A-001',
    companyName: 'TechNova Solutions',
    docType: 'MSA',
    clientDocNumber: 'ABC#111',
    year: '2024',
    startDate: '01-Jan-2024',
    expiresOn: '01-Jan-2027',
    status: 'Active',
  },
  {
    documentId: 'DOC-A-002',
    companyName: 'Vertex Corp',
    docType: 'SOW',
    clientDocNumber: 'DEF#222',
    year: '2023',
    startDate: '15-Feb-2023',
    expiresOn: '15-Feb-2026',
    status: 'Active',
  },
  {
    documentId: 'DOC-A-003',
    companyName: 'InfyGroup Pvt Ltd',
    docType: 'MSA',
    clientDocNumber: 'XYZ#777',
    year: '2022',
    startDate: '01-May-2022',
    expiresOn: '01-May-2025',
    status: 'Inactive',
  },
  {
    documentId: 'DOC-A-004',
    companyName: 'VisionSoft Ltd',
    docType: 'SOW',
    clientDocNumber: 'TUV#999',
    year: '2025',
    startDate: '01-Mar-2025',
    expiresOn: '01-Mar-2028',
    status: 'Active',
  },
];

// Columns
export const columns: Column<(typeof documents)[0]>[] = [
  {
    key: 'documentId',
    label: 'Document ID',
  },
  {
    key: 'companyName',
    label: 'Company Name',
  },
  {
    key: 'docType',
    label: 'Document Type',
  },
  {
    key: 'clientDocNumber',
    label: 'Client Doc #',
  },
  {
    key: 'year',
    label: 'Year',
  },
  {
    key: 'startDate',
    label: 'Start Date',
  },
  {
    key: 'expiresOn',
    label: 'Expires On',
  },
  {
    key: 'status',
    label: 'Status',
  },
];
