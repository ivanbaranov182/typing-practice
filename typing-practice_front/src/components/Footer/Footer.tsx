import React from 'react';
import classnames from 'classnames';
import { Copyright } from 'src/components/Copyright';
import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/reducers';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
    paddingLeft: theme.spacing(3) + drawerWidth,
    transition: theme.transitions.create(['padding'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

export const Footer: React.FC = () => {
  const classes = useStyles();

  const drawer = useSelector((state: AppState) => state.ui.drawer);

  return (
    <footer className={classes.footer}>
      <Container
        maxWidth="xl"
        className={classnames(classes.footerContainer, {
          [classes.footerContainerShift]: drawer
        })}
      >
        <Copyright />
      </Container>
    </footer>
  );
};
