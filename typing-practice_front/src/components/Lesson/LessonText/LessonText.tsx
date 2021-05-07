import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { StepStatuses, Step } from '../../../views/Lesson/types';

const useStyles = makeStyles((theme) => ({
  text: {
    marginBottom: '10px',
    padding: theme.spacing(2, 2)
  },
  notResolve: {},
  complete: {
    color: '#3f51b5'
  },
  error: {
    color: '#f50057'
  }
}));

interface LessonTextProps {
  steps: Step[];
}

export const LessonText: React.FC<LessonTextProps> = ({ steps }) => {
  const classes = useStyles();

  const getClass = useCallback((status: StepStatuses) => {
    switch (status) {
      case StepStatuses.COMPLETE:
        return classes.complete;
      case StepStatuses.ERROR:
        return classes.error;
      default:
        return classes.notResolve;
    }
  }, []);

  return (
    <Paper className={classes.text}>
      {steps.map((step, i) => (
        <span
          key={i}
          className={getClass(step.status)}
        >{`${step.value} `}</span>
      ))}
    </Paper>
  );
};
