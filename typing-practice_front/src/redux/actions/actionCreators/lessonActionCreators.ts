import { Lesson } from '../../../types/lesson';
import * as lessonActionTypes from '../actionTypes/lessonActionTypes';

export const loadLesson = (id: string): lessonActionTypes.LoadLessonAction => ({
  type: lessonActionTypes.LOAD_LESSON_LOADING,
  id
});

export const loadLessonSuccess = (
  data: Lesson
): lessonActionTypes.LoadSuccessLessonAction => ({
  type: lessonActionTypes.LOAD_LESSON_SUCCESS,
  data
});

export const loadLessonError = (
  error: Error | string
): lessonActionTypes.LoadErrorLessonAction => ({
  type: lessonActionTypes.LOAD_LESSON_ERROR,
  error
});
