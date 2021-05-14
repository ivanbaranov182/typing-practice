import { SectionDetail } from '../../../types/section';
import * as sectionActionTypes from '../actionTypes/sectionActionTypes';

export const loadSection = (
  id: string
): sectionActionTypes.LoadSectionAction => ({
  type: sectionActionTypes.LOAD_SECTION_LOADING,
  id
});

export const loadSectionSuccess = (
  data: SectionDetail[]
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
