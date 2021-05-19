import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import 'typeface-roboto';

import { MainLayout } from 'src/layouts/MainLayout';
import { authRoutes, unAuthRoutes, commonRoutes } from './routes';
import { Loader } from './components/Loader';

const App = () => {
  const user = useSelector((state) => state.user.data);

  const routes = useMemo(
    () => [...(user ? authRoutes : unAuthRoutes), ...commonRoutes],
    [user]
  );

  return (
    <>
      <BrowserRouter>
        <Switch>
          <MainLayout>
            {routes.map((route, i) => (
              <Route {...route} key={i} />
            ))}
          </MainLayout>
        </Switch>
      </BrowserRouter>
      <Loader />
    </>
  );
};

export default App;
