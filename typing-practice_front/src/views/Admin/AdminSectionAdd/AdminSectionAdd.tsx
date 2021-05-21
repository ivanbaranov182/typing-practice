import React from 'react';
import Paper from '@material-ui/core/Paper';
import { AdminSectionAddForm } from 'src/components/Admin/AdminSectionAddForm';
import { useStyles } from './AdminSectionAdd.style';

export const AdminSectionAdd: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <AdminSectionAddForm />
    </Paper>
  );
};
