import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textArea: {
    marginBottom: '10px'
  }
}));

interface ILessonInput {
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
  [key: string]: any;
}

export const LessonInput: React.FC<ILessonInput> = ({ onKeyDown, ...rest }) => {
  const classes = useStyles();

  return (
    <TextField
      multiline
      rows={7}
      variant="outlined"
      autoFocus
      fullWidth
      className={classes.textArea}
      onKeyDown={onKeyDown}
      {...rest}
    />
  );
};
