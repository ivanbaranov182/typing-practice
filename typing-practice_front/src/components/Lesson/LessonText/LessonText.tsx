import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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

export enum StepStatuses {
  COMPLETE = 'complete',
  ERROR = 'error',
  NOT_RESOLVE = 'not_resolve'
}

type Step = {
  value: string;
  status: StepStatuses;
};

interface ILessonTextProps {
  steps: Step[];
}

export const LessonText: React.FC<ILessonTextProps> = ({ steps }) => {
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
