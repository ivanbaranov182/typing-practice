const actionType = 'uiActionTypes';

export const TOGGLE_DRAWER = `${actionType}/TOGGLE_DRAWER`;
export interface ToggleDrawerAction {
  type: typeof TOGGLE_DRAWER;
}

export type UiAction = ToggleDrawerAction;
