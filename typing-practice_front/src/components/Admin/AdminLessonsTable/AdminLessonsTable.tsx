import React, { useEffect, useMemo } from 'react';
import Paper from '@material-ui/core/Paper';
import { AppState } from 'src/redux/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadSection } from 'src/redux/actions/actionCreators/sectionActionCreators';
import { dateFormatter } from 'src/utils';
import { useStyles } from './AdminLessonsTable.styles';
import { LessonsRowsData } from './AdminLessonsTable.types';
import { SimpleTable } from '../../SimpleTable/SimpleTable';
import { HeadCell } from '../../SimpleTable/SimpleTable/types';
import { InlineLoader } from '../../InlineLoader';

const headCells: HeadCell<LessonsRowsData>[] = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'id', numeric: true, disablePadding: false, label: 'ID' },
  { id: 'text', numeric: false, disablePadding: false, label: 'Text' },
  { id: 'rating', numeric: true, disablePadding: false, label: 'Rating' },
  { id: 'sectionId', numeric: true, disablePadding: false, label: 'SectionId' },
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
  }
];

export const AdminLessonsTable: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const section = useSelector((state: AppState) => state.section.data);
  const loading = useSelector((state: AppState) => state.section.loading);

  useEffect(() => {
    id && dispatch(loadSection(id));
  }, []);

  const rows = useMemo<LessonsRowsData[]>(
    () =>
      section && section.lessons
        ? section.lessons.map((lesson) => ({
            ...lesson
          }))
        : [],
    [section]
  );

  if (loading || !section) {
    return <InlineLoader />;
  }

  return (
    <Paper className={classes.paper}>
      <SimpleTable headCells={headCells} rows={rows} title={section.name} />
    </Paper>
  );
};
