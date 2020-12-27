import client from './client';

type insert = {
  title: string;
  titleImg: any;
  body: string | any;
  tags: Array<string>;
};

export const writePost = ({ title, body, tags, titleImg }: insert) => {
  return client.post('/api/post/', { title, body, tags, titleImg });
};
