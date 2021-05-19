import { combineReducers } from 'redux';
import { sectionsReducer } from './sections';
import { sectionReducer } from './section';
import { lessonReducer } from './lesson';
import { userReducer } from './user';
import { uiReducer } from './ui';

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
  sections: sectionsReducer,
  section: sectionReducer,
  lesson: lessonReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
