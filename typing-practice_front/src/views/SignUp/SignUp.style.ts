import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: 500,
      margin: `${theme.spacing(3)}px auto`,
      padding: theme.spacing(2, 2)
    }
  })
);
