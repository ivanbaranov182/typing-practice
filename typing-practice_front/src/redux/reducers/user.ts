import { AnyAction } from 'redux';
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from '../actionTypes';

export interface IUserInitialState {
  token: string | null;
  firstName: string;
  lastName: string;
  email: string;
}

const initialState: IUserInitialState = {
  token: '',
  firstName: '',
  lastName: '',
  email: '',
};

const user = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_USER: {
      const { user } = action.payload;
      return { ...state, ...user };
    }
    case REGISTER_USER: {
      const { user } = action.payload;
      return { ...state, ...user };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        token: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
