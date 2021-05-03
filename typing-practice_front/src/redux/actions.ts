import { LOGIN_USER, REGISTER_USER, FORGOT_PASSWORD, LOGOUT_USER } from './actionTypes';
import { IFormData as ILoginUser } from '../views/SignIn';
import { IFormData as IRegisterUser } from '../views/SignUp';

export const logInUser = (user: ILoginUser) => ({
  type: LOGIN_USER,
  payload: {
    user,
  },
});

export const logOutUser = () => ({
  type: LOGOUT_USER,
});

export const registerUser = (user: IRegisterUser) => ({
  type: REGISTER_USER,
  payload: {
    user,
  },
});

export const forgotPassword = (email: string) => ({
  type: FORGOT_PASSWORD,
  payload: {
    email,
  },
});
