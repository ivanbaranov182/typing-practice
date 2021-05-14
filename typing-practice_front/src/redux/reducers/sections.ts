import * as sectionsActionTypes from '../actions/actionTypes/sectionsActionTypes';
import { Section } from '../../types/section';

export interface SectionsState {
  data: Section[];
  loading: boolean;
  error: Error | string;
}

const initialState: SectionsState = {
  data: [],
  loading: false,
  error: ''
};

export const sectionsReducer = (
  state: SectionsState = initialState,
  action: sectionsActionTypes.SectionAction
): SectionsState => {
  switch (action.type) {
    case sectionsActionTypes.LOAD_SECTIONS_LOADING:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case sectionsActionTypes.LOAD_SECTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case sectionsActionTypes.LOAD_SECTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
