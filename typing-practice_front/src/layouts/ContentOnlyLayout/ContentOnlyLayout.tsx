import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Copyright } from '../../components/Copyright';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center'
  }
}));

export const ContentOnlyLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>{children}</div>
      <Box mt={5} className={classes.text}>
        <Copyright />
      </Box>
    </Container>
  );
};
