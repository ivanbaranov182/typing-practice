import * as userActionTypes from '../actions/actionTypes/userActionTypes';
import { User } from '../../types/user';

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: { email: 'test', id: 1, role: 'asd' }
};

export const userReducer = (
  state: UserState = initialState,
  action: userActionTypes.UserAction
): UserState => {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return {
        user: {
          email: 'test',
          id: 1,
          role: 'asd'
        }
      };
    default:
      return state;
  }
};
