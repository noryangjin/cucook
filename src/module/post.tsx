import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as postAPI from '../lib/api/post';

const [
  READ_POST,
  READ_POST_SUCCESS,
  READ_POST_FAILURE,
] = createRequestActionTypes('post/READ_POST');
const UNLOAD_POST = 'post/UNLOAD_POST';

export const readPost = createAction(READ_POST, (id: string) => id);
export const unloadPost = createAction(UNLOAD_POST);

type typeAction = ReturnType<typeof readPost> | ReturnType<typeof unloadPost>;

const readPostSaga = createRequestSaga(READ_POST, postAPI.ReadPost);
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}

const initialState: any = {
  post: null,
  postError: null,
};

const post = handleActions<any | typeAction>(
  {
    [UNLOAD_POST]: () => initialState,
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      post: null,
      postError,
    }),
  },
  initialState
);

export default post;
