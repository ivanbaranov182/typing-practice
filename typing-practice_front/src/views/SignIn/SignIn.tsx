import React from 'react';
import Paper from '@material-ui/core/Paper';
import { SignInForm } from 'src/components/SignInForm';
import { useStyles } from './SignIn.style';

export const SignIn: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <SignInForm />
    </Paper>
  );
};
