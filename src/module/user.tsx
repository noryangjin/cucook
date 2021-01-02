import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import * as authAPI from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

// const TEMP_SET_USER = 'user/TEMP_SET_USER' as const;
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  'user/CHECK'
);
const LOGOUT = 'user/LOGOUT' as const;
// export const tempSetUser = createAction(TEMP_SET_USER, (user: object) => user);

export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

type typeAction = ReturnType<typeof check> | ReturnType<typeof logout>;

type typeInitialState = {
  user: object | null | string;
  checkError: object | null | string;
};

const checkSaga = createRequestSaga(CHECK, authAPI.check);
const logoutSaga = createRequestSaga(LOGOUT, authAPI.logout);

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState: typeInitialState = {
  user: null,
  checkError: null,
};

const user = handleActions<(typeInitialState | any) | typeAction>(
  {
    // [TEMP_SET_USER]: (state, { payload: user }) => ({
    //   ...state,
    //   user,
    // }),
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
  },
  initialState
);

export default user;
