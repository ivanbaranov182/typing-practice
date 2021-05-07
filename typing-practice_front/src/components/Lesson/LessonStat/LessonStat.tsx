import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { LessonStatItem } from '../LessonStatItem/LessonStatItem';

const useStyles = makeStyles((theme) => ({
  lessonStat: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    padding: theme.spacing(2, 2)
  }
}));

interface ILessonProps {
  signs: number;
  typed: number;
  progress: number;
  wpm: number;
  errors: number;
  accuracy: number;
  time: number;
}

export const LessonStat: React.FC<ILessonProps> = (props) => {
  const classes = useStyles();

  const getStatItemValue = (title: keyof ILessonProps): string =>
    String(props[title]);

  return (
    <Paper className={classes.lessonStat}>
      {(Object.keys(props) as Array<keyof Omit<typeof props, 'children'>>).map(
        (statisticItem) => (
          <LessonStatItem
            key={statisticItem}
            value={getStatItemValue(statisticItem)}
            description={statisticItem}
          />
        )
      )}
    </Paper>
  );
};
