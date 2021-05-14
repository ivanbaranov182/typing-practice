import React, { useContext, useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { formElementChange } from '../../utils';
import { registration } from '../../http/userAPI';
import { HOME_ROUTE } from '../../utils/routes';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export interface IFormData {
  email: string;
  password: string;
  confirmPassword: string;
  allowExtraEmails: boolean;
}

export const SignUp: React.FC = () => {
  const user = {};
  const classes = useStyles();
  const history = useHistory();

  const [data, setData] = useState<IFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    allowExtraEmails: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formElementChange<IFormData>(e, setData, data);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const newUser = await registration(data.email, data.password);
      // user.setUser(newUser);
      // user.setIsAuth(true);
      history.push(HOME_ROUTE);
    } catch (e) {
      console.error(e.response.data.message);
    }
  };

  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
              onChange={handleChange}
              value={data.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              onChange={handleChange}
              value={data.confirmPassword}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  value="allowExtraEmails"
                  name="allowExtraEmails"
                  color="primary"
                  onChange={handleChange}
                  checked={data.allowExtraEmails}
                />
              }
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <RouterLink to="signin">
              Already have an account? Sign in
            </RouterLink>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
