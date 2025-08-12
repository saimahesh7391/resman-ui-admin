import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';
import { columns, roles } from '@/components/constants/roles';
import IntelligentTable from '@/components/common/IntelligentTable';

export default function RolesPage() {
  const [filteredRoles, setFilteredRoles] = useState(roles);
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const [newRole, setNewRole] = useState<Record<string, any>>(
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

    const filtered = roles.filter((role) =>
      Object.values(role).some((value) =>
        String(value).toLowerCase().includes(lowerSearch),
      ),
    );

    setFilteredRoles(filtered);
  };

  const handleAddClick = () => {
    setOpenAddDialog(true);
  };

  const handleDialogClose = () => {
    setOpenAddDialog(false);
  };

  const handleFormChange = (key: string, value: any) => {
    setNewRole((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleAddSubmit = () => {
    console.log('🆕 New Role:', newRole);
    setFilteredRoles((prev: any) => [...prev, newRole]);
    setOpenAddDialog(false);
    // Reset the form after submission
    setNewRole(
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
        rows={filteredRoles}
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
        <DialogTitle>Add New Role</DialogTitle>
        <DialogContent dividers>
          {columns.map((col) => (
            <TextField
              key={String(col.key)}
              label={col.label}
              value={newRole[col.key]}
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
