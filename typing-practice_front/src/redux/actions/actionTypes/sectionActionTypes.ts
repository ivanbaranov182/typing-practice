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

export const CREATE_SECTION_LOADING = `${actionType}/CREATE_SECTION_LOADING`;
export interface CreateSectionAction {
  type: typeof CREATE_SECTION_LOADING;
  sectionData: any;
}

export const CREATE_SECTION_SUCCESS = `${actionType}/CREATE_SECTION_SUCCESS`;
export interface CreateSectionSuccessAction {
  type: typeof CREATE_SECTION_SUCCESS;
  section: Section;
}

export const CREATE_SECTION_ERROR = `${actionType}/CREATE_SECTION_ERROR`;
export interface CreateSectionErrorAction {
  type: typeof CREATE_SECTION_ERROR;
  error: Error | string;
}

export const EDIT_SECTION_LOADING = `${actionType}/EDIT_SECTION_LOADING`;
export interface EditSectionAction {
  type: typeof EDIT_SECTION_LOADING;
  sectionData: any;
}

export const EDIT_SECTION_SUCCESS = `${actionType}/EDIT_SECTION_SUCCESS`;
export interface EditSectionSuccessAction {
  type: typeof EDIT_SECTION_SUCCESS;
  section: Section;
}

export const EDIT_SECTION_ERROR = `${actionType}/EDIT_SECTION_ERROR`;
export interface EditSectionErrorAction {
  type: typeof EDIT_SECTION_ERROR;
  error: Error | string;
}

export const DELETE_SECTION_LOADING = `${actionType}/DELETE_SECTION_LOADING`;
export interface DeleteSectionAction {
  type: typeof DELETE_SECTION_LOADING;
  id: string;
}

export const DELETE_SECTION_SUCCESS = `${actionType}/DELETE_SECTION_SUCCESS`;
export interface DeleteSectionSuccessAction {
  type: typeof DELETE_SECTION_SUCCESS;
}

export const DELETE_SECTION_ERROR = `${actionType}/DELETE_SECTION_ERROR`;
export interface DeleteSectionErrorAction {
  type: typeof DELETE_SECTION_ERROR;
  error: Error | string;
}

export type SectionAction = LoadSectionAction &
  LoadSuccessSectionAction &
  LoadErrorSectionAction &
  CreateSectionAction &
  CreateSectionSuccessAction &
  CreateSectionErrorAction &
  EditSectionAction &
  EditSectionSuccessAction &
  EditSectionErrorAction &
  DeleteSectionAction &
  DeleteSectionSuccessAction &
  DeleteSectionErrorAction;
