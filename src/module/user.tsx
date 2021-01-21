import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import * as authAPI from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';
import * as userInfo from '../lib/api/userInfo';

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  'user/CHECK'
);
const LOGOUT = 'user/LOGOUT' as const;
const [
  READ_USERPOST,
  READ_USERPOST_SUCCESS,
  READ_USERPOST_FAILURE,
] = createRequestActionTypes('user/READ_USER_POST');
const INITIALIZEUSERINFO = 'user/INITIALIZEUSERINFO' as const;

export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);
export const readUserPost = createAction(
  READ_USERPOST,
  (username: string) => username
);
export const initializeUserInfo = createAction(INITIALIZEUSERINFO);

type typeAction =
  | ReturnType<typeof check>
  | ReturnType<typeof logout>
  | ReturnType<typeof readUserPost>;

type typeInitialState = {
  user: object | null | string;
  checkError: object | null | string;
  post: Object | null;
  postError: Object | null;
};

const checkSaga = createRequestSaga(CHECK, authAPI.check);
const logoutSaga = createRequestSaga(LOGOUT, authAPI.logout);
const readUserPostSaga = createRequestSaga(
  READ_USERPOST,
  userInfo.readUserPost
);
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(READ_USERPOST, readUserPostSaga);
}

const initialState: typeInitialState = {
  user: null,
  checkError: null,
  post: null,
  postError: null,
};

const user = handleActions<(typeInitialState | any) | typeAction>(
  {
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      checkError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
    [READ_USERPOST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_USERPOST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      post: null,
      postError,
    }),
    [INITIALIZEUSERINFO]: (state) => ({
      ...state,
      post: null,
      postError: null,
    }),
  },
  initialState
);

export default user;
