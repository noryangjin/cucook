import client from './client';

export const readUserPost = (username: string) => {
  return client.get(`/api/user/post/${username}`);
};
