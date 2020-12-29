import client from './client';

type insert = {
  category: string;
  title: string;
  titleImg: any;
  body: string | any;
  ingredients: Array<string>;
  tags: Array<string>;
};

export const writePost = ({
  category,
  title,
  body,
  ingredients,
  tags,
  titleImg,
}: insert) => {
  return client.post('/api/post/', {
    category,
    title,
    body,
    ingredients,
    tags,
    titleImg,
  });
};
