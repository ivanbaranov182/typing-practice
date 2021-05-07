import { useContext, useEffect, useMemo } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import 'typeface-roboto';

import { Context } from './context';
import { authRoutes, unAuthRoutes, commonRoutes } from './routes';
import RouteWrapper from './utils/RouteWrapper';
import { Loader } from './components/Loader';
import './app.css';
import { check } from './http/userAPI';

const App = observer(() => {
  const { user, ui } = useContext(Context);

  const routes = useMemo(
    () => [...(user.isAuth ? authRoutes : unAuthRoutes), ...commonRoutes],
    [user.isAuth]
  );

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .finally(() => {
        ui.setLoading(false);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, i) => (
            <RouteWrapper {...route} key={i} />
          ))}
        </Switch>
      </BrowserRouter>
      <Loader />
    </>
  );
});

export default App;
