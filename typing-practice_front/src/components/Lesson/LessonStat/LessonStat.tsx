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

enum StatisticItems {
  SIGNS = 'signs',
  TYPED = 'typed',
  PROGRESS = 'progress',
  WPM = 'wpm',
  ERRORS = 'errors',
  ACCURACY = 'accuracy',
  TIME = 'time'
}

const statisticItems: Array<StatisticItems> = Object.values(StatisticItems);

interface ILessonProps {
  time: number;
  signs: number;
  typed: number;
  progress: number;
  wpm: number;
  errors: number;
  accuracy: number;
}

export const LessonStat: React.FC<ILessonProps> = (props) => {
  const classes = useStyles();

  console.log('props', Object.keys(props));

  const getStatItemValue = (title: string): string => String(props[title]);

  return (
    <Paper className={classes.lessonStat}>
      {Object.keys(props).map((statisticItem) => (
        <LessonStatItem
          key={statisticItem}
          value={getStatItemValue(statisticItem)}
          description={statisticItem}
        />
      ))}
    </Paper>
  );
};
