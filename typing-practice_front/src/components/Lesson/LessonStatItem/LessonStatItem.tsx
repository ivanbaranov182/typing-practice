import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  lessonStatItem: {
    padding: theme.spacing(0, 1.5),
    textAlign: 'center'
  },
  lessonStatItemTitle: {
    fontSize: '1.25rem'
  },
  lessonStatItemDescription: {
    textTransform: 'capitalize',
    borderTop: '2px solid grey',
    fontSize: '0.75rem'
  }
}));

interface ILessonStatItemProps {
  value: string;
  description: string;
}

export const LessonStatItem: React.FC<ILessonStatItemProps> = ({
  value,
  description
}) => {
  const classes = useStyles();

  return (
    <div className={classes.lessonStatItem}>
      <div className={classes.lessonStatItemTitle}>{value}</div>
      <div className={classes.lessonStatItemDescription}>{description}</div>
    </div>
  );
};
