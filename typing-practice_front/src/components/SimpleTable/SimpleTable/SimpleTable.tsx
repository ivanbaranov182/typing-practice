import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState
} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import { Entity } from 'src/types';
import { SimpleTableToolbar } from '../SimpleTableToolbar';
import { SimpleTableHead } from '../SimpleTableHead';
import { SimpleTableProps, HeadCell, Order } from './types';
import { useStyles } from './styles';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export function SimpleTable<T extends Entity>({
  headCells,
  rows,
  title,
  addButtonClick,
  deleteButtonClick
}: PropsWithChildren<SimpleTableProps<T>>) {
  const classes = useStyles();
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof T>('id');
  const [selected, setSelected] = useState<number[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: keyof T
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const emptyRows = useMemo<number>(
    () => rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage),
    [rowsPerPage, rows.length, page]
  );

  const getCellValue = useCallback(
    (row: T, headCell: HeadCell<T>): any =>
      headCell.getCellValue ? headCell.getCellValue(row) : row[headCell.id],
    [rows, headCells]
  );

  return (
    <>
      <SimpleTableToolbar
        numSelected={selected.length}
        {...{ title, addButtonClick, deleteButtonClick }}
      />
      <TableContainer>
        <Table className={classes.table} size="small">
          <SimpleTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
            headCells={headCells}
          />
          <TableBody>
            {
              // stableSort(rows, getComparator(order, orderBy))
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const isItemSelected = isSelected(row.id);
                  return (
                    <TableRow hover tabIndex={-1} key={row.id}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          color="primary"
                          onClick={(event) => handleClick(event, row.id)}
                        />
                      </TableCell>
                      {headCells.map((headCell) => (
                        <TableCell
                          key={headCell.label}
                          align={headCell.numeric ? 'right' : 'left'}
                          padding={headCell.disablePadding ? 'none' : 'default'}
                        >
                          {getCellValue(row, headCell)}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })
            }
            {emptyRows > 0 && (
              <TableRow style={{ height: 33 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 15, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
}
