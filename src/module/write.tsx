import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE' as const;
const CHANGE_FIELD = 'write/CHANGE_FIELD' as const;
const [WRITE, WRITE_SUCCESS, WRITE_FAILURE] = createRequestActionTypes(
  'write/WRITE'
);
const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST' as const;
const [
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
] = createRequestActionTypes('write/UPDATE_POST');

type type = {
  key?: string;
  value?: any;
  category?: string;
  title?: string;
  titleImg?: any;
  body?: string | any;
  ingredients?: Array<string>;
  tags?: Array<string>;
  id?: string;
};

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }: type) => ({ key, value })
);
export const writePost = createAction(
  WRITE,
  ({ category, title, titleImg, body, ingredients, tags }: type) => ({
    category,
    title,
    titleImg,
    body,
    ingredients,
    tags,
  })
);
export const setOriginalPost = createAction(
  SET_ORIGINAL_POST,
  (post: any) => post
);
export const updatePost = createAction(
  UPDATE_POST,
  ({ id, title, body, tags, ingredients, titleImg, category }: type) => ({
    id,
    title,
    body,
    tags,
    ingredients,
    titleImg,
    category,
  })
);

type typeAction =
  | ReturnType<typeof initialize>
  | ReturnType<typeof changeField>
  | ReturnType<typeof writePost>
  | ReturnType<typeof setOriginalPost>
  | ReturnType<typeof updatePost>;

const writePostSaga = createRequestSaga(WRITE, postAPI.writePost);
const updatePostSaga = createRequestSaga(UPDATE_POST, postAPI.updatePost);
export function* writeSaga() {
  yield takeLatest(WRITE, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}

type typeInitialState = {
  category: string;
  title: string;
  titleImg: any;
  body: string | any;
  ingredients: Array<string>;
  tags: Array<string>;
  post: any;
  postError: any;
  originalPostId: string | null;
};

const initialState: typeInitialState = {
  category: '',
  title: '',
  titleImg: null,
  body: '',
  ingredients: [],
  tags: [],
  post: null,
  postError: null,
  originalPostId: null,
};

const write = handleActions<(typeInitialState | any) | typeAction>(
  {
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE]: (state) => ({
      ...state,
      post: null,
      postError: null,
    }),
    [WRITE_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [WRITE_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      post: null,
      postError,
    }),
    [SET_ORIGINAL_POST]: (state, { payload: post }) => ({
      ...state,
      title: post.title,
      body: post.body,
      tags: post.tags,
      ingredients: post.ingredients,
      category: post.category,
      titleImg: post.titleImg,
      originalPostId: post._id,
    }),
    [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      post: null,
      postError,
    }),
  },
  initialState
);

export default write;
