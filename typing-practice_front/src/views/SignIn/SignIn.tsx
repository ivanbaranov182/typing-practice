import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { formElementChange } from 'src/utils';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export interface IFormData {
  email: string;
  password: string;
  remember: boolean;
}

export const SignIn = () => {
  const classes = useStyles();

  const [data, setData] = useState<IFormData>({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formElementChange<IFormData>(e, setData, data);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('data', data);
  };

  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handleChange}
          value={data.email}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
          value={data.password}
        />
        <FormControlLabel
          control={<Checkbox value="remember" name="remember" color="primary" onChange={handleChange} checked={data.remember} />}
          label="Remember me"
        />
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <RouterLink to="forgot-password">Forgot password?</RouterLink>
          </Grid>
          <Grid item>
            <RouterLink to="signup">Don't have an account? Sign Up</RouterLink>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
