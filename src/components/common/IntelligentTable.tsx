import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Toolbar,
  Box,
  Button,
} from '@mui/material';
import { FilterList, ViewColumn } from '@mui/icons-material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

export type Column<T> = {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type IntelligentTableProps<T> = {
  columns: Column<T>[];
  rows: T[];
  enableSearch?: boolean;
  enableAdd?: boolean;
  onSearch?: (value: string) => void;
  onAddClick?: () => void;
};

export default function IntelligentTable<T>({
  columns,
  rows,
  enableSearch = true,
  enableAdd = true,
  onSearch,
  onAddClick,
}: IntelligentTableProps<T>) {
  const [searchValue, setSearchValue] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [visibleColumns, setVisibleColumns] = useState(
    columns.reduce(
      (acc, col) => ({
        ...acc,
        [col.key]: true,
      }),
      {} as Record<keyof T, boolean>,
    ),
  );

  // const handleSearchChange = (e: any) => {
  //   const value = e.target.value;
  //   setSearchValue(value);
  //   onSearch?.(value); // Send to parent
  // };

  const handleSearchChange = (e: any) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch?.(value);
  };

  const toggleColumn = (key: keyof T) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleOpenColumnMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseColumnMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Paper className="mt-4 p-4">
      <Toolbar className="flex flex-wrap justify-between gap-4">
        {enableSearch && (
          <TextField
            value={searchValue}
            // onChange={handleSearchChange}
            onChange={handleSearchChange}
            placeholder="Search..."
            size="small"
          />
        )}

        <Box className="flex gap-2">
          {enableAdd && (
            <IconButton aria-label="add" color="primary" onClick={onAddClick}>
              <AddIcon />
            </IconButton>
          )}
          <Button
            variant="outlined"
            startIcon={<FilterList />}
            onClick={() => alert('TODO: Add filters')}
          >
            Filter
          </Button>

          <Button
            variant="outlined"
            startIcon={<ViewColumn />}
            onClick={handleOpenColumnMenu}
          >
            Columns
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseColumnMenu}
          >
            {columns.map((col) => (
              <MenuItem key={String(col.key)}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={visibleColumns[col.key]}
                      onChange={() => toggleColumn(col.key)}
                    />
                  }
                  label={col.label}
                />
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>

      <Table>
        <TableHead>
          <TableRow
            style={{
              background: '#18206F',
            }}
          >
            {columns.map(
              (col) =>
                visibleColumns[col.key] && (
                  <TableCell
                    key={String(col.key)}
                    style={{
                      color: 'white',
                    }}
                  >
                    {col.label}
                  </TableCell>
                ),
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx} className={idx % 2 === 0 ? 'bg-gray-100' : ''}>
              {columns.map(
                (col) =>
                  visibleColumns[col.key] && (
                    // <TableCell key={String(col.key)}>{String(row[col.key])}</TableCell>
                    <TableCell key={String(col.key)}>
                      {col.render
                        ? col.render(row[col.key], row)
                        : String(row[col.key] ?? '')}
                    </TableCell>
                  ),
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
