import { User } from '../../../types/user';
import * as userActionTypes from '../actionTypes/userActionTypes';

export const setUser = (user: User): userActionTypes.SetUserAction => ({
  type: userActionTypes.SET_USER,
  user
});

export const getUser = (user: User): userActionTypes.GetUserAction => ({
  type: userActionTypes.GET_USER,
  user
});

export const getUserRequest = (
  user: User
): userActionTypes.GetUserRequestAction => ({
  type: userActionTypes.GET_USER_REQUEST,
  user
});

export const getUserSuccess = (
  user: User
): userActionTypes.GetUserSuccessAction => ({
  type: userActionTypes.GET_USER_SUCCESS,
  user
});

export const getUserFailure = (
  error: Error | string
): userActionTypes.GetUserFailureAction => ({
  type: userActionTypes.GET_USER_FAILURE,
  error
});
