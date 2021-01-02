import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as commentAPI from '../lib/api/comment';

const UNLOADCOMMENT = 'comment/UNLOADCOMMENT';
const [
  READ_COMMENT,
  READ_COMMENT_SUCCESS,
  READ_COMMENT_FAILURE,
] = createRequestActionTypes('comment/READ_COMMENT');
type insert = {
  id: string;
  text?: string;
};

export const readComment = createAction(READ_COMMENT, (id: insert) => id);
export const unLoadComment = createAction(UNLOADCOMMENT);

type typeAction =
  | ReturnType<typeof readComment>
  | ReturnType<typeof unLoadComment>;

const readCommentSaga = createRequestSaga(READ_COMMENT, commentAPI.readComment);
export function* commentSaga() {
  yield takeLatest(READ_COMMENT, readCommentSaga);
}

const initialState = {
  comments: null,
  commentError: null,
};

const comment = handleActions<any | typeAction>(
  {
    [READ_COMMENT_SUCCESS]: (state, { payload: comments }) => ({
      ...state,
      comments,
    }),
    [READ_COMMENT_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      commentError,
      comments: null,
    }),
    [UNLOADCOMMENT]: () => initialState,
  },
  initialState
);

export default comment;
