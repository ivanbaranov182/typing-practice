import React from 'react';
import classnames from 'classnames';
import { Copyright } from 'src/components/Copyright';
import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/reducers';
import Container from '@material-ui/core/Container';
import { useStyles } from './Footer.style';

export const Footer: React.FC = () => {
  const classes = useStyles();
  const drawer = useSelector((state: AppState) => state.ui.drawer);

  return (
    <footer className={classes.footer}>
      <Container
        maxWidth="xl"
        className={classnames(classes.footerContainer, {
          [classes.footerContainerShift]: drawer
        })}
      >
        <Copyright />
      </Container>
    </footer>
  );
};
