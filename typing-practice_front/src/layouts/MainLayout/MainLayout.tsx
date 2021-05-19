import React from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/reducers';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginBottom: '40px',
    transition: theme.transitions.create(['padding'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  mainShift: {
    paddingLeft: theme.spacing(3) + drawerWidth,
    transition: theme.transitions.create(['padding'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

export const MainLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  const drawer = useSelector((state: AppState) => state.ui.drawer);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Container
        component="main"
        maxWidth="xl"
        className={classnames(classes.main, {
          [classes.mainShift]: drawer
        })}
      >
        <>{children}</>
      </Container>
      <Footer />
    </div>
  );
};
