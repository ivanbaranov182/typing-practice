import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Lesson } from 'src/types/lesson';
import { LESSON_ROUTE } from 'src/utils/routes';

const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
});

export const LessonItem: React.FC<Lesson> = ({ id, name }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <CardActionArea onClick={() => history.push(`${LESSON_ROUTE}/${id}`)}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Nov 12
            </Typography>
            <Typography variant="subtitle1" paragraph>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Start lesson...
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title={name}
          />
        </Hidden>
      </Card>
    </CardActionArea>
  );
};
