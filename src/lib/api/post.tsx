import client from './client';

type insert = {
  title: string;
  body: string | any;
  tags: Array<string>;
};

export const writePost = ({ title, body, tags }: insert) => {
  return client.post('/api/post/', { title, body, tags });
};
