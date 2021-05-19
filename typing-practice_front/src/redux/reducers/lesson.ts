import * as lessonActionTypes from '../actions/actionTypes/lessonActionTypes';
import { Lesson } from '../../types/lesson';

export interface LessonState {
  data: Lesson | null;
  loading: boolean;
  error: Error | string;
}

const initialState: LessonState = {
  data: null,
  loading: false,
  error: ''
};

export const lessonReducer = (
  state: LessonState = initialState,
  action: lessonActionTypes.LessonAction
): LessonState => {
  switch (action.type) {
    case lessonActionTypes.LOAD_LESSON_LOADING:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case lessonActionTypes.LOAD_LESSON_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case lessonActionTypes.LOAD_LESSON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
