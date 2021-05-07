import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginBottom: '40px'
  }
}));

export const MainLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="md" className={classes.main}>
        <>{children}</>
      </Container>
      <Footer />
    </div>
  );
};
