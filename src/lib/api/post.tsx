import client from './client';
import qs from 'qs';

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

export const ReadPost = (id: string) => {
  return client.get(`/api/post/${id}`);
};

export const listPosts = ({
  username,
  tag,
  ingredient,
  category,
  sort,
}: any) => {
  const queryString = qs.stringify({
    username,
    tag,
    ingredient,
    category,
    sort,
  });
  return client.get(`/api/post?${queryString}`);
};
