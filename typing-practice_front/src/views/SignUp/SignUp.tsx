import React from 'react';
import Paper from '@material-ui/core/Paper';
import { SignUpForm } from 'src/components/SignUpForm';
import { useStyles } from './SignUp.style';

export const SignUp: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <SignUpForm />
    </Paper>
  );
};
