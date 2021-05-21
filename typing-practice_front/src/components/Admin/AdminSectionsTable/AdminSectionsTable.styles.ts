import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '100%',
      margin: `${theme.spacing(3)}px auto`
    },
    actionButtons: {
      display: 'flex'
    }
  })
);
