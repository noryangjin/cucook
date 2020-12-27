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

type type = {
  key?: string;
  value?: any;
  title?: string;
  titleImg?: any;
  body?: string | any;
  tags?: Array<string>;
};

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }: type) => ({ key, value })
);
export const writePost = createAction(
  WRITE,
  ({ title, titleImg, body, tags }: type) => ({
    title,
    titleImg,
    body,
    tags,
  })
);

type typeAction =
  | ReturnType<typeof initialize>
  | ReturnType<typeof changeField>
  | ReturnType<typeof writePost>;

const writePostSaga = createRequestSaga(WRITE, postAPI.writePost);
export function* writeSaga() {
  yield takeLatest(WRITE, writePostSaga);
}

type typeInitialState = {
  title: string;
  titleImg: any;
  body: string | any;
  tags: Array<string>;
  post: any;
  postError: any;
};

const initialState: typeInitialState = {
  title: '',
  titleImg: null,
  body: '',
  tags: [],
  post: null,
  postError: null,
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
  },
  initialState
);

export default write;
