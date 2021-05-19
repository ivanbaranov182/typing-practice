import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import App from './App';
import { InlineLoader } from './components/InlineLoader';
import { AppState } from './redux/reducers';
import { userCheckLoading } from './redux/actions/actionCreators/userActionCreators';

const AppWrapper: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: AppState) => state.user.loading);

  useEffect(() => {
    dispatch(userCheckLoading());
  }, []);

  if (loading) {
    return <InlineLoader />;
  }

  return <App />;
};

export default AppWrapper;
