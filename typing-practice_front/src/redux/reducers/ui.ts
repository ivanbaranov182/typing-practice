import * as uiActionTypes from '../actions/actionTypes/uiActionTypes';

export interface UiState {
  drawer: boolean;
  loading: boolean;
  error: Error | string;
}

const initialState: UiState = {
  drawer: false,
  loading: false,
  error: ''
};

export const uiReducer = (
  state: UiState = initialState,
  action: uiActionTypes.UiAction
) => {
  switch (action.type) {
    case uiActionTypes.TOGGLE_DRAWER:
      return {
        ...state,
        drawer: !state.drawer
      };
    default:
      return state;
  }
};
