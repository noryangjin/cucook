import client from './client';
import qs from 'qs';

type insert = {
  category: string;
  title: string;
  titleImg: any;
  body: string | any;
  ingredients: Array<string>;
  tags: Array<string>;
  id?: string;
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

export const listPosts = ({ tag, ingredient, category, sort, page }: any) => {
  const queryString = qs.stringify({
    tag,
    ingredient,
    category,
    sort,
    page,
  });
  return client.get(`/api/post?${queryString}`);
};

export const searchPost = ({ search }: string) => {
  return client.get(`api/post/search/?term=${search}`);
};

export const updatePost = ({
  id,
  category,
  title,
  body,
  ingredients,
  tags,
  titleImg,
}: insert) => {
  return client.patch(`/api/post/${id}`, {
    id,
    category,
    title,
    body,
    ingredients,
    tags,
    titleImg,
  });
};

export const deletePost = (id: string) => {
  return client.delete(`/api/post/${id}`);
};
