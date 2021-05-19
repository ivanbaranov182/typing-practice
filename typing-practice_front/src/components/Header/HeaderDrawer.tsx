import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppState } from 'src/redux/reducers';
import { toggleDrawer } from 'src/redux/actions/actionCreators/uiActionCreators';
import { loadSections } from 'src/redux/actions/actionCreators/sectionsActionCreators';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { HeaderDrawerSections } from './HeaderDrawerSections';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
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
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
      minHeight: '48px !important'
    }
  })
);

interface ILink {
  link: string;
  text: string;
  childs?: ILink[];
}

const mainlinks: ILink[] = [
  {
    link: '/',
    text: 'Home'
  },
  {
    link: '/section',
    text: 'Sections'
  },
  {
    link: '/contacts',
    text: 'Contacts'
  }
];

const lessonsLinks: ILink[] = [];

export const HeaderDrawer: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const drawer = useSelector((state: AppState) => state.ui.drawer);

  const toggleDrawerOpen = () => dispatch(toggleDrawer());

  useEffect(() => {
    dispatch(loadSections());
  }, []);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={drawer}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawerOpen}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List dense={true}>
        {mainlinks.map((link, index) => (
          <ListItem
            button
            key={link.text}
            onClick={() => history.push(link.link)}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={link.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <HeaderDrawerSections />
      <Divider />
    </Drawer>
  );
};
