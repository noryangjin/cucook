import client from './client';

type insert = {
  username: string;
  password: string;
};

export const login = ({ username, password }: insert) => {
  return client.post('/api/user/login', { username, password });
};

export const register = ({ username, password }: insert) => {
  return client.post('/api/user/register', { username, password });
};

export const check = () => {
  return client.get('/api/user/check');
};

export const logout = () => {
  return client.get('/api/user/logout');
};
