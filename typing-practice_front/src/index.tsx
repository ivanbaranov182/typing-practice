import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store';
import AppWrapper from './AppWrapper';

import './app.css';

const store = configureStore();

render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
  document.getElementById('root')
);
