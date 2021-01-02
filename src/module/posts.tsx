import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_POSTS,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE,
] = createRequestActionTypes('posts/LIST_POSTS');

export const listPosts = createAction(
  LIST_POSTS,
  ({ tag, username, ingredient, category }: any) => ({
    tag,
    username,
    ingredient,
    category,
  })
);

type typeAction = ReturnType<typeof listPosts>;

const listPostsSaga = createRequestSaga(LIST_POSTS, postAPI.listPosts);
export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
}

const initialState = {
  posts: null,
  postsError: null,
};

const posts = handleActions<any | typeAction>(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
    }),
    [LIST_POSTS_FAILURE]: (state, { payload: postsError }) => ({
      ...state,
      posts: null,
      postsError,
    }),
  },
  initialState
);

export default posts;
