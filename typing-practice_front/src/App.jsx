import { useEffect, useMemo } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import 'typeface-roboto';

import { authRoutes, unAuthRoutes, commonRoutes } from './routes';
import RouteWrapper from './utils/RouteWrapper';
import { Loader } from './components/Loader';
import { check } from './http/userAPI';

const App = () => {
  const user = {};
  const ui = {};

  const routes = useMemo(
    () => [...(user.isAuth ? authRoutes : unAuthRoutes), ...commonRoutes],
    [user.isAuth]
  );

  useEffect(() => {
    // check()
    //   .then((data) => {
    //     // user.setUser(data);
    //     // user.setIsAuth(true);
    //   })
    //   .finally(() => {
    //     // ui.setLoading(false);
    //   });
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
};

export default App;
