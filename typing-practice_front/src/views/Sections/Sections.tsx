import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/reducers';

import { SectionItem } from 'src/components/SectionItem';
import { InlineLoader } from 'src/components/InlineLoader';

import Button from '@material-ui/core/Button';
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

export const Sections: React.FC = () => {
  const classes = useStyles();

  const sections = useSelector((state: AppState) => state.sections.data);
  const loading = useSelector((state: AppState) => state.sections.loading);

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Album layout
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Main call to action
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>

        {loading && <InlineLoader />}

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {sections.map((section) => (
              <Grid item key={section.id} xs={12} sm={6} md={4}>
                <SectionItem
                  key={section.id}
                  id={section.id}
                  name={section.name}
                  text={section.text}
                  img={section.img}
                  createdAt={section.createdAt}
                  updatedAt={section.updatedAt}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};
