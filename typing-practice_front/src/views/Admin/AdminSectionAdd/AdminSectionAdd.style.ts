import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '100%',
      maxWidth: 500,
      margin: '20px auto',
      padding: theme.spacing(0, 2)
    }
  })
);
