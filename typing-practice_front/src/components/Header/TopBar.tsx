import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classnames from 'classnames';
import { Context } from '../../context';
import { SIGN_IN_ROUTE, ADMIN_ROUTE } from '../../utils/routes';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

export const TopBar: React.FC = observer(() => {
  const { user, ui } = useContext(Context);
  const classes = useStyles();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  const toggleDrawerOpen = () => {
    ui.toggleDrawer();
  };

  return (
    <AppBar
      position="relative"
      className={classnames(classes.appBar, {
        [classes.appBarShift]: ui.drawerData
      })}
    >
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
          component={NavLink}
          to="/"
        >
          Typing practice
        </Typography>
        {!user.isAuth ? (
          <>
            <Button color="inherit" component={NavLink} to={SIGN_IN_ROUTE}>
              Login
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={NavLink} to={ADMIN_ROUTE}>
              Admin panel
            </Button>
            <Button color="inherit" onClick={logOut}>
              log out
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
});
