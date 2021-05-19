import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LessonItem } from 'src/components/LessonItem';
import { InlineLoader } from 'src/components/InlineLoader';
import { loadSection } from 'src/redux/actions/actionCreators/sectionActionCreators';
import { AppState } from 'src/redux/reducers';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

export const Section: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();

  const section = useSelector((state: AppState) => state.section.data);
  const loading = useSelector((state: AppState) => state.section.loading);

  useEffect(() => {
    id && dispatch(loadSection(id));
  }, [id]);

  if (loading || !section) {
    return <InlineLoader />;
  }

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="xl">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {section.name}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            {section.text}
          </Typography>
        </Container>

        <Container className={classes.cardGrid} maxWidth="xl">
          <Grid container spacing={4}>
            {section.lessons &&
              section.lessons.map((lesson) => (
                <Grid item xs={12} md={6} key={lesson.id}>
                  <LessonItem {...{ ...lesson }} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};
