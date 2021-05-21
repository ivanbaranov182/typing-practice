import { Section } from '../../../types/section';
import * as sectionActionTypes from '../actionTypes/sectionActionTypes';

export const loadSection = (
  id: string
): sectionActionTypes.LoadSectionAction => ({
  type: sectionActionTypes.LOAD_SECTION_LOADING,
  id
});

export const loadSectionSuccess = (
  data: Section
): sectionActionTypes.LoadSuccessSectionAction => ({
  type: sectionActionTypes.LOAD_SECTION_SUCCESS,
  data
});

export const loadSectionError = (
  error: Error | string
): sectionActionTypes.LoadErrorSectionAction => ({
  type: sectionActionTypes.LOAD_SECTION_ERROR,
  error
});

export const createSection = (
  sectionData: any
): sectionActionTypes.CreateSectionAction => ({
  type: sectionActionTypes.CREATE_SECTION_LOADING,
  sectionData
});

export const createSectionSuccess = (
  section: Section
): sectionActionTypes.CreateSectionSuccessAction => ({
  type: sectionActionTypes.CREATE_SECTION_SUCCESS,
  section
});

export const createSectionError = (
  error: Error | string
): sectionActionTypes.CreateSectionErrorAction => ({
  type: sectionActionTypes.CREATE_SECTION_ERROR,
  error
});

export const editSection = (
  sectionData: any
): sectionActionTypes.EditSectionAction => ({
  type: sectionActionTypes.EDIT_SECTION_LOADING,
  sectionData
});

export const editSectionSuccess = (
  section: Section
): sectionActionTypes.EditSectionSuccessAction => ({
  type: sectionActionTypes.EDIT_SECTION_SUCCESS,
  section
});

export const editSectionError = (
  error: Error | string
): sectionActionTypes.EditSectionErrorAction => ({
  type: sectionActionTypes.EDIT_SECTION_ERROR,
  error
});

export const deleteSection = (
  id: any
): sectionActionTypes.DeleteSectionAction => ({
  type: sectionActionTypes.DELETE_SECTION_LOADING,
  id
});

export const deleteSectionSuccess = (): sectionActionTypes.DeleteSectionSuccessAction => ({
  type: sectionActionTypes.DELETE_SECTION_SUCCESS
});

export const deleteSectionError = (
  error: Error | string
): sectionActionTypes.DeleteSectionErrorAction => ({
  type: sectionActionTypes.DELETE_SECTION_ERROR,
  error
});
