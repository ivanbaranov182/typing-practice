import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  text: {
    marginBottom: '10px',
    padding: theme.spacing(2, 2)
  },
  complete: {
    color: '#a1f'
  }
}));

interface ILessonTextProps {
  steps: string[];
  result: string[];
  step: number;
}

export const LessonText: React.FC<ILessonTextProps> = ({
  steps,
  result,
  step
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.text}>
      {result.join(' ')}
      <hr />
      <span className={classes.complete}>
        {result.map((item, i) => steps[i])}
      </span>
      {steps.join(' ')}
    </Paper>
  );
};
