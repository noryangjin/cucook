import client from './client';

type insert = {
  id: string;
  text?: string;
};

export const writeComment = ({ id, text }: insert) => {
  return client.post(`/api/comment/${id}`, { text });
};

export const readComment = (id: insert) => {
  return client.get(`/api/comment/${id}`);
};
