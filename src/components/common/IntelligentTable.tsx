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
  TableContainer,
  TableSortLabel,
} from '@mui/material';
import { FilterList, ViewColumn } from '@mui/icons-material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { visuallyHidden } from '@mui/utils';

export type Column<T> = {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

export type IntelligentTableProps<T> = {
  columns: Column<T>[];
  rows: T[];
  enableSearch?: boolean;
  enableFilters?: boolean;
  enableAdd?: boolean;
  onSearch?: (value: string) => void;
  onFilterChange?: (filters: Record<string, any>) => void;
  onAddClick?: () => void;
  onRowClick?: (row: T) => void;
};

type Order = 'asc' | 'desc';

export default function IntelligentTable<T>({
  columns,
  rows,
  enableSearch = true,
  enableAdd = true,
  onSearch,
  onAddClick,
  onRowClick,
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

  // Sorting state
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof T | null>(null);

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

  // Sorting logic
  const handleSort = (property: keyof T) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedRows = orderBy
    ? [...rows].sort((a, b) => {
        const aValue = a[orderBy];
        const bValue = b[orderBy];

        if (aValue == null) return 1;
        if (bValue == null) return -1;

        if (aValue < bValue) return order === 'asc' ? -1 : 1;
        if (aValue > bValue) return order === 'asc' ? 1 : -1;
        return 0;
      })
    : rows;

  return (
    <Paper className="mt-4 p-4">
      <Toolbar className="flex flex-wrap justify-between gap-4">
        {enableSearch && (
          <TextField
            value={searchValue}
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
          <TableRow style={{ background: '#18206F' }}>
            {columns.map(
              (col) =>
                visibleColumns[col.key] && (
                  <TableCell key={String(col.key)}>
                    <TableSortLabel
                      active={orderBy === col.key}
                      direction={orderBy === col.key ? order : 'asc'}
                      onClick={() => handleSort(col.key)}
                      sx={{
                        color: 'white !important', // always white
                        '&.Mui-active': {
                          color: 'white !important', // keep white when active
                        },
                        '& .MuiTableSortLabel-icon': {
                          color: 'white !important', // keep arrow white
                        },
                      }}
                    >
                      {col.label}
                      {orderBy === col.key ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === 'desc'
                            ? 'sorted descending'
                            : 'sorted ascending'}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ),
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row, idx) => (
            <TableRow
              key={idx}
              className={idx % 2 === 0 ? 'bg-gray-100' : ''}
              hover
              style={{ cursor: onRowClick ? 'pointer' : 'default' }}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map(
                (col) =>
                  visibleColumns[col.key] && (
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
