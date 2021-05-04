import React, { useEffect, useState } from 'react';
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
  signs: number;
}

export const LessonStat: React.FC<ILessonProps> = ({ signs }) => {
  const classes = useStyles();
  const [statistic, setStatistic] = useState<Record<StatisticItems, number>>({
    signs,
    typed: 0,
    progress: 0,
    wpm: 0,
    errors: 0,
    accuracy: 0,
    time: 0
  });

  const getStatItemValue = (title: StatisticItems): string =>
    String(statistic[title]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatistic((statistic) => ({
        ...statistic,
        time: statistic.time + 1
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Paper className={classes.lessonStat}>
      {statisticItems.map((statisticItem) => (
        <LessonStatItem
          key={statisticItem}
          value={getStatItemValue(statisticItem)}
          description={statisticItem}
        />
      ))}
    </Paper>
  );
};
