// src/modules/admin/pages/DocumentsPage.tsx
import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import { columns, documents } from '@/components/constants/documents';
import IntelligentTable from '@/components/common/IntelligentTable';

export default function DocumentsPage() {
  const [filteredDocuments, setFilteredDocuments] = useState(documents);
  const [openAddDialog, setOpenAddDialog] = useState(false);

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
    const lowerSearch = searchText.toLowerCase();

    const filtered = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        String(value).toLowerCase().includes(lowerSearch),
      ),
    );

    setFilteredDocuments(filtered);
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
    console.log('🆕 New Document:', newDoc);
    setFilteredDocuments((prev: any) => [...prev, newDoc]);
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
    <div>
      <IntelligentTable
        columns={columns}
        rows={filteredDocuments}
        onSearch={handleSearch}
        onAddClick={handleAddClick}
        enableSearch
        enableAdd
      />

      <Dialog
        open={openAddDialog}
        onClose={handleDialogClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Add New Document</DialogTitle>
        <DialogContent dividers>
          {columns.map((col) => (
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
    </div>
  );
}
