import { User, UserRegister, UserLogin } from '../../../types/user';
import * as userActionTypes from '../actionTypes/userActionTypes';

export const userRegistrationLoading = (
  user: UserRegister
): userActionTypes.UserRegistrationLoadingAction => ({
  type: userActionTypes.USER_REGISTRATION_LOADING,
  user
});

export const userRegistrationSuccess = (
  user: User
): userActionTypes.UserRegistrationSuccessAction => ({
  type: userActionTypes.USER_REGISTRATION_SUCCESS,
  user
});

export const userRegistrationError = (
  error: Error | string
): userActionTypes.UserRegistrationErrorAction => ({
  type: userActionTypes.USER_REGISTRATION_ERROR,
  error
});

export const userLoginLoading = (
  user: UserLogin
): userActionTypes.UserLoginLoadingAction => ({
  type: userActionTypes.USER_LOGIN_LOADING,
  user
});

export const userLoginSuccess = (
  user: User
): userActionTypes.UserLoginSuccessAction => ({
  type: userActionTypes.USER_LOGIN_SUCCESS,
  user
});

export const userLoginError = (
  error: Error | string
): userActionTypes.UserLoginErrorAction => ({
  type: userActionTypes.USER_LOGIN_ERROR,
  error
});

export const userCheckLoading = (): userActionTypes.UserCheckLoadingAction => ({
  type: userActionTypes.USER_CHECK_LOADING
});

export const userCheckSuccess = (
  user: User
): userActionTypes.UserCheckSuccessAction => ({
  type: userActionTypes.USER_CHECK_SUCCESS,
  user
});

export const userCheckError = (
  error: Error | string
): userActionTypes.UserCheckErrorAction => ({
  type: userActionTypes.USER_CHECK_ERROR,
  error
});

export const userLogOut = (): userActionTypes.UserLogOut => ({
  type: userActionTypes.USER_LOGOUT
});
