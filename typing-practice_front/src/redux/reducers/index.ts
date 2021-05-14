import { combineReducers } from 'redux';
import { sectionsReducer } from './sections';
import { sectionReducer } from './section';
import { userReducer } from './user';

const rootReducer = combineReducers({
  user: userReducer,
  sections: sectionsReducer,
  section: sectionReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
