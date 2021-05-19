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
      return {
        ...state,
        loading: true,
        error: ''
      };
    case sectionActionTypes.LOAD_SECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case sectionActionTypes.LOAD_SECTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
