import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { userRegistrationLoading } from 'src/redux/actions/actionCreators/userActionCreators';
import { formElementChange } from '../../utils';
import { HOME_ROUTE } from '../../utils/routes';
import { useStyles } from './SignUpForm.style';
import { IFormData } from './SignUpForm.type';

export const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
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
    dispatch(userRegistrationLoading(data));
    history.push(HOME_ROUTE);
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
              size="small"
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
              size="small"
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
              size="small"
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
