import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textArea: {
    marginBottom: '10px'
  }
}));

interface ILessonInput {
  onKeyPress: React.KeyboardEventHandler<HTMLDivElement>;
  [key: string]: any;
}

export const LessonInput: React.FC<ILessonInput> = ({
  onKeyPress,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <TextField
      multiline
      rows={7}
      variant="outlined"
      autoFocus
      fullWidth
      className={classes.textArea}
      onKeyPress={onKeyPress}
      {...rest}
    />
  );
};
