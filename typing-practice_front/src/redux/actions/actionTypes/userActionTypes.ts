import { User, UserRegister, UserLogin } from '../../../types/user';

const actionType = 'userActionTypes';

export const USER_REGISTRATION_LOADING = `${actionType}/USER_REGISTRATION_LOADING`;
export interface UserRegistrationLoadingAction {
  type: typeof USER_REGISTRATION_LOADING;
  user: UserRegister;
}

export const USER_REGISTRATION_SUCCESS = `${actionType}/USER_REGISTRATION_SUCCESS`;
export interface UserRegistrationSuccessAction {
  type: typeof USER_REGISTRATION_SUCCESS;
  user: User;
}

export const USER_REGISTRATION_ERROR = `${actionType}/USER_REGISTRATION_ERROR`;
export interface UserRegistrationErrorAction {
  type: typeof USER_REGISTRATION_ERROR;
  error: Error | string;
}

export const USER_LOGIN_LOADING = `${actionType}/USER_LOGIN_LOADING`;
export interface UserLoginLoadingAction {
  type: typeof USER_LOGIN_LOADING;
  user: UserLogin;
}

export const USER_LOGIN_SUCCESS = `${actionType}/USER_LOGIN_SUCCESS`;
export interface UserLoginSuccessAction {
  type: typeof USER_REGISTRATION_SUCCESS;
  user: User;
}

export const USER_LOGIN_ERROR = `${actionType}/USER_LOGIN_ERROR`;
export interface UserLoginErrorAction {
  type: typeof USER_LOGIN_ERROR;
  error: Error | string;
}

export const USER_CHECK_LOADING = `${actionType}/USER_CHECK_LOADING`;
export interface UserCheckLoadingAction {
  type: typeof USER_LOGIN_LOADING;
}

export const USER_CHECK_SUCCESS = `${actionType}/USER_CHECK_SUCCESS`;
export interface UserCheckSuccessAction {
  type: typeof USER_REGISTRATION_SUCCESS;
  user: User;
}

export const USER_CHECK_ERROR = `${actionType}/USER_CHECK_ERROR`;
export interface UserCheckErrorAction {
  type: typeof USER_CHECK_ERROR;
  error: Error | string;
}

export const USER_LOGOUT = `${actionType}/USER_LOGOUT`;
export interface UserLogOut {
  type: typeof USER_LOGOUT;
}

export type UserAction = UserRegistrationLoadingAction &
  UserRegistrationSuccessAction &
  UserRegistrationErrorAction;
