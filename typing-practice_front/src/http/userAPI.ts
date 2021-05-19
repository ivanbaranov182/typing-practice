import jwt_decode from 'jwt-decode';
import { UserLogin, UserRegister } from 'src/types/user';
import { host, authHost } from './index';

export const userApi = {
  registration: async ({ email, password, confirmPassword }: UserRegister) => {
    const { data } = await host.post('/user/registration', {
      email,
      password,
      confirmPassword,
      role: 'USER'
    });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
  },
  login: async ({ email, password }: UserLogin) => {
    const { data } = await host.post('/user/login', { email, password });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
  },
  check: async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const { data } = await authHost.get('/user/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
  }
};
