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
import { userLoginLoading } from 'src/redux/actions/actionCreators/userActionCreators';
import { formElementChange } from '../../utils';
import { HOME_ROUTE } from '../../utils/routes';
import { useStyles } from './SignInForm.style';
import { IFormData } from './SignInForm.type';

export const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const [data, setData] = useState<IFormData>({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formElementChange<IFormData>(e, setData, data);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(userLoginLoading(data));
    history.push(HOME_ROUTE);
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
          size="small"
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
          size="small"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
          value={data.password}
        />
        <FormControlLabel
          control={
            <Checkbox
              value="remember"
              name="remember"
              color="primary"
              onChange={handleChange}
              checked={data.remember}
            />
          }
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
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
