import React, { useState } from 'react';
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

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export interface IFormData {
  fullname: string;
  email: string;
  message: string;
  terms: boolean;
}

export const Contacts = () => {
  const classes = useStyles();

  const [data, setData] = useState<IFormData>({
    fullname: '',
    email: '',
    message: '',
    terms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formElementChange<IFormData>(e, setData, data);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('data', data);
  };

  return (
    <div className="these beliefs hold true for your projects">
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Contacts
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="fullname"
          label="Fullname"
          name="fullname"
          autoComplete="fullname"
          autoFocus
          onChange={handleChange}
          value={data.fullname}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          autoComplete="email"
          onChange={handleChange}
          value={data.email}
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="message"
          label="Message"
          name="message"
          autoComplete="message"
          multiline
          onChange={handleChange}
          value={data.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              value="terms"
              name="terms"
              color="primary"
              onChange={handleChange}
              checked={data.terms}
            />
          }
          label={`I agree to the{" "}<a href="https://google.com">terms and conditions</a>`}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Send
        </Button>
      </form>
    </div>
  );
};
