import jwt_decode from 'jwt-decode';
import { host, authHost } from './index';

export const registration = async (email: string, password: string) => {
  const { data } = await host.post('api/user/registration', {
    email,
    password,
    role: 'USER'
  });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const login = async (email: string, password: string) => {
  const { data } = await host.post('api/user/login', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data }: any = await authHost.get('api/user/auth');
  localStorage.setItem('token', data.token);
  return data.token;
};
