import { makeAutoObservable } from 'mobx';
import { IUser } from '../types/user';

export default class UserStore {
  isAuth: boolean;

  user: IUser | null;

  constructor() {
    this.isAuth = false;
    this.user = null;
    makeAutoObservable(this);
  }

  setIsAuth(auth: boolean) {
    this.isAuth = auth;
  }

  setUser(user: IUser | null) {
    this.user = user;
  }

  get isUserAuth() {
    return this.isAuth;
  }

  get userData() {
    return this.user;
  }
}
