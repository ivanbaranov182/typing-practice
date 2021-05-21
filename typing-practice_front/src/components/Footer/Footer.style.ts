import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from 'src/utils/consts';

export const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(1, 0),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  },
  footerContainer: {
    transition: theme.transitions.create(['padding'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  footerContainerShift: {
    paddingLeft: theme.spacing(3) + DRAWER_WIDTH,
    transition: theme.transitions.create(['padding'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));
