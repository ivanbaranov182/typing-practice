import { Section } from '../../../types/section';

const actionType = 'sectionsActionTypes';

export const LOAD_SECTIONS_LOADING = `${actionType}/LOAD_SECTIONS_LOADING`;
export interface LoadSectionsAction {
  type: typeof LOAD_SECTIONS_LOADING;
}

export const LOAD_SECTIONS_SUCCESS = `${actionType}/LOAD_SECTIONS_SUCCESS`;
export interface LoadSuccessSectionsAction {
  type: typeof LOAD_SECTIONS_SUCCESS;
  data: Section[];
}

export const LOAD_SECTIONS_ERROR = `${actionType}/LOAD_SECTIONS_ERROR`;
export interface LoadErrorSectionsAction {
  type: typeof LOAD_SECTIONS_ERROR;
  error: Error | string;
}

export type SectionAction = LoadSectionsAction &
  LoadSuccessSectionsAction &
  LoadErrorSectionsAction;
