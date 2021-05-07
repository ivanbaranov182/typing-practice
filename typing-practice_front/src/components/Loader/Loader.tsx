import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Context } from '../../context';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff'
    }
  })
);

export const Loader: React.FC = observer(() => {
  const { ui } = useContext(Context);
  const classes = useStyles();
  return (
    <>
      <Backdrop className={classes.backdrop} open={ui.loadingData}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
});
