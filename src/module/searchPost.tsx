import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/post';

const [
  SEARCH_POST,
  SERACH_POST_SUCCESS,
  SEARCH_POST_FAILURE,
] = createRequestActionTypes('searchPost/SEARCH_POST');
const SEARCH_VALUE = 'searchPost/SEARCH_VALUE';
const SEARCH_INITIALSTATE = 'searchPost/SEARCH_INITIALSTATE';

export const search_Post = createAction(SEARCH_POST, ({ search }: any) => ({
  search,
}));
export const searchValue = createAction(SEARCH_VALUE, (term: string) => term);
export const searchInitialstate = createAction(SEARCH_INITIALSTATE);

type typeAction =
  | ReturnType<typeof search_Post>
  | ReturnType<typeof searchValue>
  | ReturnType<typeof searchInitialstate>;

const searchPostSaga_ = createRequestSaga(SEARCH_POST, postAPI.searchPost);
export function* searchPostSaga() {
  yield takeLatest(SEARCH_POST, searchPostSaga_);
}

const initialState = {
  term: '',
  searchPost: null,
  searchPostError: null,
};

const searchPost = handleActions<any | typeAction>(
  {
    [SEARCH_VALUE]: (state, { payload: term }) => ({
      ...state,
      term,
    }),
    [SERACH_POST_SUCCESS]: (state, { payload: searchPost }) => ({
      ...state,
      searchPost,
    }),
    [SEARCH_POST_FAILURE]: (state, { payload: searchPostError }) => ({
      ...state,
      searchPost: null,
      searchPostError,
    }),
    [SEARCH_INITIALSTATE]: (state) => ({
      ...state,
      searchPost: null,
      searchPostError: null,
    }),
  },
  initialState
);

export default searchPost;
