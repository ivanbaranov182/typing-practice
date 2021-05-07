import ReactDOM from 'react-dom';
import App from './App';
import { Context } from './context';
import LessonGroupStore from './store/LessonGroupStore';
import LessonStore from './store/LessonStore';
import UIStore from './store/UIStore';
import UserStore from './store/UserStore';

ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      lesson: new LessonStore(),
      lessonGroups: new LessonGroupStore(),
      ui: new UIStore()
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
