import React, { useMemo } from 'react';
import Paper from '@material-ui/core/Paper';
import { AppState } from 'src/redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { dateFormatter } from 'src/utils';
import { Link, useHistory } from 'react-router-dom';
import {
  ADMIN_SECTION,
  ADMIN_SECTION_ADD,
  ADMIN_SECTION_EDIT
} from 'src/utils/routes';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { deleteSection } from 'src/redux/actions/actionCreators/sectionActionCreators';
import { useStyles } from './AdminSectionsTable.styles';
import { SectionsRowsData } from './AdminSectionsTable.types';
import { SimpleTable } from '../../SimpleTable/SimpleTable';
import { HeadCell } from '../../SimpleTable/SimpleTable/types';

const headCells: HeadCell<SectionsRowsData>[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
    getCellValue: ({ id, name }) => (
      <Link to={`${ADMIN_SECTION}/${id}`}>{name}</Link>
    )
  },
  { id: 'id', numeric: true, disablePadding: false, label: 'ID' },
  { id: 'text', numeric: false, disablePadding: false, label: 'Text' },
  {
    id: 'img',
    numeric: false,
    disablePadding: false,
    label: 'Img',
    getCellValue: (row) =>
      row.img ? <img src={row.img} alt={row.name} width="100px" /> : 'no-image'
  },
  {
    id: 'createdAt',
    numeric: false,
    disablePadding: false,
    label: 'createdAt',
    getCellValue: (row) => dateFormatter(new Date(row.createdAt)).toDateTime()
  },
  {
    id: 'updatedAt',
    numeric: false,
    disablePadding: false,
    label: 'updatedAt',
    getCellValue: (row) => dateFormatter(new Date(row.updatedAt)).toDateTime()
  },
  {
    id: 'actions',
    numeric: false,
    disablePadding: false,
    label: 'actions'
  }
];

export const AdminSectionsTable: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const sections = useSelector((state: AppState) => state.sections.data);

  const handleDeleteSection = (id: number) => {
    dispatch(deleteSection(id));
  };

  const rows = useMemo<SectionsRowsData[]>(
    () =>
      sections.map((section) => ({
        ...section,
        actions: (
          <div className={classes.actionButtons}>
            <IconButton
              size="small"
              onClick={() =>
                history.push(`${ADMIN_SECTION_EDIT}/${section.id}`)
              }
            >
              <EditIcon />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => handleDeleteSection(section.id)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        )
      })),
    [sections]
  );

  return (
    <Paper className={classes.paper}>
      <SimpleTable
        headCells={headCells}
        rows={rows}
        title="Sections"
        addButtonClick={() => history.push(ADMIN_SECTION_ADD)}
        deleteButtonClick={() => alert()}
      />
    </Paper>
  );
};
