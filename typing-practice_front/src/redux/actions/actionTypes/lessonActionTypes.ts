import { Lesson } from '../../../types/lesson';

const actionType = 'lessonActionTypes';

export const LOAD_LESSON_LOADING = `${actionType}/LOAD_LESSON_LOADING`;
export interface LoadLessonAction {
  type: typeof LOAD_LESSON_LOADING;
  id: string;
}

export const LOAD_LESSON_SUCCESS = `${actionType}/LOAD_LESSON_SUCCESS`;
export interface LoadSuccessLessonAction {
  type: typeof LOAD_LESSON_SUCCESS;
  data: Lesson;
}

export const LOAD_LESSON_ERROR = `${actionType}/LOAD_LESSON_ERROR`;
export interface LoadErrorLessonAction {
  type: typeof LOAD_LESSON_ERROR;
  error: Error | string;
}

export type LessonAction = LoadLessonAction &
  LoadSuccessLessonAction &
  LoadErrorLessonAction;
