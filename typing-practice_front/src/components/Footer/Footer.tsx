import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Copyright } from 'src/components/Copyright';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Copyright />
      </Container>
    </footer>
  );
};
