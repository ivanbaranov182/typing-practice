import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { SimpleTableToolbarProps } from './types';
import { useStyles } from './styles';

export const SimpleTableToolbar: React.FC<SimpleTableToolbarProps> = ({
  numSelected,
  title,
  addButtonClick,
  deleteButtonClick
}) => {
  const classes = useStyles();

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
      )}
      {numSelected > 0
        ? deleteButtonClick && (
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={deleteButtonClick}
            >
              Delete
            </Button>
          )
        : addButtonClick && (
            <Button
              variant="contained"
              color="primary"
              startIcon={<DeleteIcon />}
              onClick={addButtonClick}
            >
              Add
            </Button>
          )}
    </Toolbar>
  );
};
