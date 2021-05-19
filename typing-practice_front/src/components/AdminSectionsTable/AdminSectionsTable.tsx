import React, { useMemo } from 'react';
import Paper from '@material-ui/core/Paper';
import { AppState } from 'src/redux/reducers';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { RowsData } from './types';
import { AdminTable } from '../AdminTable';
import { HeadCell } from '../AdminTable/types';

const headCells: HeadCell<RowsData>[] = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'id', numeric: true, disablePadding: false, label: 'ID' },
  { id: 'text', numeric: false, disablePadding: false, label: 'Text' },
  { id: 'img', numeric: false, disablePadding: false, label: 'Img' },
  {
    id: 'createdAt',
    numeric: false,
    disablePadding: false,
    label: 'createdAt'
  },
  { id: 'updatedAt', numeric: false, disablePadding: false, label: 'updatedAt' }
];

export const AdminSectionsTable: React.FC = () => {
  const classes = useStyles();
  const sections = useSelector((state: AppState) => state.sections.data);

  const rows = useMemo<RowsData[]>(
    () =>
      sections.map(({ id, name, text, img, createdAt, updatedAt }) => ({
        id,
        name,
        text,
        img,
        createdAt,
        updatedAt
      })),
    [sections]
  );

  return (
    <Paper className={classes.paper}>
      <AdminTable headCells={headCells} rows={rows} />
    </Paper>
  );
};
