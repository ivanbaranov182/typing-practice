import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Section } from 'src/types/section';
import { SECTION_ROUTE } from 'src/utils/routes';
import { useStyles } from './SectionItem.style';

export const SectionItem: React.FC<Section> = ({ id, img, name, text }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card
      className={classes.card}
      onClick={() => history.push(`${SECTION_ROUTE}/${id}`)}
    >
      <CardMedia
        className={classes.cardMedia}
        image={img || 'https://source.unsplash.com/random'}
        title={name}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography>{text}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};
