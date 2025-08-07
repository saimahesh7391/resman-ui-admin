import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Tooltip,
} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IntelligentTable, {
  type Column,
} from '@/components/common/IntelligentTable';

// Dummy file URLs
const msaAndSowDocs = [
  {
    documentId: 'DOC-A-000001',
    paymentTerms: '90 Days',
    docType: 'Services',
    client: 'One',
    year: '2023',
    startDate: '01-Jan-2023',
    expiresOn: '31-Dec-2023',
    status: 'Active',
    infoUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    documentId: 'DOC-A-000002',
    paymentTerms: '60 Days',
    docType: 'Fixed',
    client: 'Two',
    year: '2022',
    startDate: '01-Jun-2022',
    expiresOn: '01-Jun-2024',
    status: 'Inactive',
    infoUrl:
      'https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.docx',
  },
  {
    documentId: 'DOC-A-000003',
    paymentTerms: '45 Days',
    docType: 'T&M-Hour',
    client: 'Three',
    year: '2024',
    startDate: '01-Mar-2024',
    expiresOn: '01-Mar-2025',
    status: 'Active',
    infoUrl:
      'https://file-examples.com/wp-content/uploads/2017/02/file_example_XLSX_100.xlsx',
  },
];

// Helper to detect and route file type
function getViewerUrl(url: string) {
  const extension = url.split('.').pop()?.toLowerCase();

  if (extension === 'pdf') {
    return url;
  }

  // Use Google Docs Viewer for docx, xlsx, pptx, etc.
  return `https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`;
}

export default function MsaAndSowPage() {
  const [filteredDocs, setFilteredDocs] = useState(msaAndSowDocs);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [docPreviewUrl, setDocPreviewUrl] = useState<string | null>(null);

  const handlePreview = (url: string) => {
    const viewerUrl = getViewerUrl(url);
    setDocPreviewUrl(viewerUrl);
  };

  const columns: Column<(typeof msaAndSowDocs)[0]>[] = [
    {
      key: 'documentId',
      label: 'Document ID',
    },
    {
      key: 'paymentTerms',
      label: 'Payment Terms',
    },
    {
      key: 'docType',
      label: 'Document Type',
    },
    {
      key: 'client',
      label: 'Client',
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
    {
      key: 'infoUrl',
      label: 'Info',
      render: (url: string) => (
        <Tooltip title="View Document">
          <IconButton
            size="small"
            color="primary"
            onClick={() => handlePreview(url)}
          >
            <PictureAsPdfIcon />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  const [newDoc, setNewDoc] = useState<Record<string, any>>(
    columns.reduce(
      (acc, col) => ({
        ...acc,
        [col.key]: '',
      }),
      {},
    ),
  );

  const handleSearch = (searchText: string) => {
    const lower = searchText.toLowerCase();
    const filtered = msaAndSowDocs.filter((doc) =>
      Object.values(doc).some((value) =>
        String(value).toLowerCase().includes(lower),
      ),
    );
    setFilteredDocs(filtered);
  };

  const handleAddClick = () => {
    setOpenAddDialog(true);
  };

  const handleDialogClose = () => {
    setOpenAddDialog(false);
  };

  const handleFormChange = (key: string, value: any) => {
    setNewDoc((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleAddSubmit = () => {
    setFilteredDocs((prev: any) => [...prev, newDoc]);
    setOpenAddDialog(false);
    setNewDoc(
      columns.reduce(
        (acc, col) => ({
          ...acc,
          [col.key]: '',
        }),
        {},
      ),
    );
  };

  return (
    <>
      <IntelligentTable
        columns={columns}
        rows={filteredDocs}
        onSearch={handleSearch}
        onAddClick={handleAddClick}
        enableSearch
        enableAdd
      />

      {/* Add Dialog */}
      <Dialog
        open={openAddDialog}
        onClose={handleDialogClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Add MSA/SOW Document</DialogTitle>
        <DialogContent dividers>
          {columns
            .filter((col) => col.key !== 'infoUrl') // Skip file link in form
            .map((col) => (
              <TextField
                key={String(col.key)}
                label={col.label}
                value={newDoc[col.key]}
                fullWidth
                margin="dense"
                onChange={(e) =>
                  handleFormChange(String(col.key), e.target.value)
                }
              />
            ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddSubmit} color="primary" variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog
        open={!!docPreviewUrl}
        onClose={() => setDocPreviewUrl(null)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Document Preview</DialogTitle>
        <DialogContent
          dividers
          style={{
            height: '80vh',
            padding: 0,
          }}
        >
          {docPreviewUrl && (
            <iframe
              src={docPreviewUrl}
              title="Document Viewer"
              width="100%"
              height="100%"
              style={{
                border: 'none',
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
