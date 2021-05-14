import { User } from '../../../types/user';

const actionType = 'userActionTypes';

export const SET_USER = `${actionType}/SET_USER`;
export interface SetUserAction {
  type: typeof SET_USER;
  user: User;
}

export const GET_USER = `${actionType}/GET_USER`;
export interface GetUserAction {
  type: typeof GET_USER;
  user: User;
}

export const GET_USER_REQUEST = `${actionType}/GET_USER_REQUEST`;
export interface GetUserRequestAction {
  type: typeof GET_USER_REQUEST;
  user: User;
}

export const GET_USER_SUCCESS = `${actionType}/GET_USER_SUCCESS`;
export interface GetUserSuccessAction {
  type: typeof GET_USER_SUCCESS;
  user: User;
}

export const GET_USER_FAILURE = `${actionType}/GET_USER_FAILURE`;
export interface GetUserFailureAction {
  type: typeof GET_USER_FAILURE;
  error: Error | string;
}

export type UserAction =
  | SetUserAction
  | GetUserAction
  | GetUserRequestAction
  | GetUserSuccessAction
  | GetUserFailureAction;
