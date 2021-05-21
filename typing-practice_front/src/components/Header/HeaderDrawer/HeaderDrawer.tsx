import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppState } from 'src/redux/reducers';
import { toggleDrawer } from 'src/redux/actions/actionCreators/uiActionCreators';
import { loadSections } from 'src/redux/actions/actionCreators/sectionsActionCreators';
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
import { useStyles } from './HeaderDrawer.style';
import { HeaderDrawerSections } from './HeaderDrawerSections';

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
