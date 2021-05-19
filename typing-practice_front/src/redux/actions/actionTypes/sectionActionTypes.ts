import { Section } from '../../../types/section';

const actionType = 'sectionActionTypes';

export const LOAD_SECTION_LOADING = `${actionType}/LOAD_SECTION_LOADING`;
export interface LoadSectionAction {
  type: typeof LOAD_SECTION_LOADING;
  id: string;
}

export const LOAD_SECTION_SUCCESS = `${actionType}/LOAD_SECTION_SUCCESS`;
export interface LoadSuccessSectionAction {
  type: typeof LOAD_SECTION_SUCCESS;
  data: Section;
}

export const LOAD_SECTION_ERROR = `${actionType}/LOAD_SECTION_ERROR`;
export interface LoadErrorSectionAction {
  type: typeof LOAD_SECTION_ERROR;
  error: Error | string;
}

export type SectionAction = LoadSectionAction &
  LoadSuccessSectionAction &
  LoadErrorSectionAction;
