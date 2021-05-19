import { Entity } from '.';

interface IUser extends Entity {
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
}

export type User = Pick<IUser, 'id' | 'email' | 'role'>;
export type UserLogin = Pick<IUser, 'email' | 'password'>;
export type UserRegister = Pick<
  IUser,
  'email' | 'password' | 'confirmPassword'
>;
