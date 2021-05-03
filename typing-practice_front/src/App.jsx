import React, { useMemo, useState } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { authRoutes, unAuthRoutes, commonRoutes } from './routes';
import RouteWrapper from './utils/RouteWrapper';
import './app.css';

import Fab from '@material-ui/core/Fab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const routes = useMemo(() => {
    return [...(token ? authRoutes : unAuthRoutes), ...commonRoutes];
  }, [token]);

  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, i) => (
            <RouteWrapper {...route} key={i} />
          ))}
        </Switch>
      </BrowserRouter>
      <Fab color={token ? 'secondary' : 'primary'} className={classes.fab} onClick={() => setToken(token ? null : 'tokenValue')}>
        <LockOutlinedIcon />
      </Fab>
    </>
  );
};

export default App;
