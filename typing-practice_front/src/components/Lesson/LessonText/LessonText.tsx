import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  text: {
    marginBottom: '10px',
    padding: theme.spacing(2, 2),
  },
}));

interface ILessonTextProps {
  lessonText: string;
}

export const LessonText: React.FC<ILessonTextProps> = ({ lessonText }) => {
  const classes = useStyles();
  return <Paper className={classes.text}>{lessonText}</Paper>;
};
