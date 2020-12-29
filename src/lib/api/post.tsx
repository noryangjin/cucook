import client from './client';

type insert = {
  category: string;
  title: string;
  titleImg: any;
  body: string | any;
  ingredient: Array<string>;
  tags: Array<string>;
};

export const writePost = ({
  category,
  title,
  body,
  ingredient,
  tags,
  titleImg,
}: insert) => {
  return client.post('/api/post/', {
    category,
    title,
    body,
    ingredient,
    tags,
    titleImg,
  });
};
