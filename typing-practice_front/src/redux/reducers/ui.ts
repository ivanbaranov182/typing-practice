export interface UiState {
  drawer: boolean;
}

const initialState: UiState = {
  drawer: false
};

export const uiReducer = (state: UiState = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
