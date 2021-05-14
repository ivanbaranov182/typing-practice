import { Section } from '../../../types/section';
import * as sectionsActionTypes from '../actionTypes/sectionsActionTypes';

export const loadSections = (): sectionsActionTypes.LoadSectionsAction => ({
  type: sectionsActionTypes.LOAD_SECTIONS_LOADING
});

export const loadSectionsSuccess = (
  data: Section[]
): sectionsActionTypes.LoadSuccessSectionsAction => ({
  type: sectionsActionTypes.LOAD_SECTIONS_SUCCESS,
  data
});

export const loadSectionsError = (
  error: Error | string
): sectionsActionTypes.LoadErrorSectionsAction => ({
  type: sectionsActionTypes.LOAD_SECTIONS_ERROR,
  error
});
