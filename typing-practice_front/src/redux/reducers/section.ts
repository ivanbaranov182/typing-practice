import * as sectionActionTypes from '../actions/actionTypes/sectionActionTypes';
import { Section } from '../../types/section';

export interface SectionState {
  data: Section | null;
  loading: boolean;
  error: Error | string;
}

const initialState: SectionState = {
  data: null,
  loading: false,
  error: ''
};

export const sectionReducer = (
  state: SectionState = initialState,
  action: sectionActionTypes.SectionAction
): SectionState => {
  switch (action.type) {
    case sectionActionTypes.LOAD_SECTION_LOADING:
    case sectionActionTypes.CREATE_SECTION_LOADING:
    case sectionActionTypes.EDIT_SECTION_LOADING:
    case sectionActionTypes.DELETE_SECTION_LOADING:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case sectionActionTypes.LOAD_SECTION_SUCCESS:
    case sectionActionTypes.CREATE_SECTION_SUCCESS:
    case sectionActionTypes.EDIT_SECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case sectionActionTypes.DELETE_SECTION_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case sectionActionTypes.LOAD_SECTION_ERROR:
    case sectionActionTypes.CREATE_SECTION_ERROR:
    case sectionActionTypes.EDIT_SECTION_ERROR:
    case sectionActionTypes.DELETE_SECTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
