import * as userActionTypes from '../actions/actionTypes/userActionTypes';
import { User } from '../../types/user';

export interface UserState {
  data: User | null;
  loading: boolean;
  error: Error | string;
}

const initialState: UserState = {
  data: null,
  loading: true,
  error: ''
};

export const userReducer = (
  state: UserState = initialState,
  action: userActionTypes.UserAction
): UserState => {
  switch (action.type) {
    case userActionTypes.USER_REGISTRATION_LOADING:
    case userActionTypes.USER_LOGIN_LOADING:
    case userActionTypes.USER_CHECK_LOADING:
      return {
        ...state,
        loading: true
      };
    case userActionTypes.USER_REGISTRATION_SUCCESS:
    case userActionTypes.USER_CHECK_SUCCESS:
    case userActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          id: action.user.id,
          role: action.user.role,
          email: action.user.email
        }
      };
    case userActionTypes.USER_LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        data: null,
        loading: false,
        error: ''
      };
    case userActionTypes.USER_REGISTRATION_ERROR:
    case userActionTypes.USER_LOGIN_ERROR:
    case userActionTypes.USER_CHECK_ERROR:
      return {
        ...state,
        loading: false,
        error: state.error
      };
    default:
      return state;
  }
};
