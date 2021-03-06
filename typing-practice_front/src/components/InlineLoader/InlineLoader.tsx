import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './InlineLoader.style';

export const InlineLoader: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      className={classes.loading}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
      <Grid item>Loading...</Grid>
    </Grid>
  );
};
