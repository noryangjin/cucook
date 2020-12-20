import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD' as const;
const INITIALIZE = 'auth/INITIALIZE' as const;
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN'
);
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER'
);

type typeChangeField = {
  form: string;
  key: string;
  value: string;
};

type typeLoginRegister = {
  username: string;
  password: string;
};

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }: typeChangeField) => ({ form, key, value })
);
export const initialize = createAction(INITIALIZE, (form: string) => form);
export const login = createAction(
  LOGIN,
  ({ username, password }: typeLoginRegister) => ({ username, password })
);
export const register = createAction(
  REGISTER,
  ({ username, password }: typeLoginRegister) => ({ username, password })
);

type typeAction =
  | ReturnType<typeof changeField>
  | ReturnType<typeof initialize>
  | ReturnType<typeof login>
  | ReturnType<typeof register>;

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const registerSaga = createRequestSaga(REGISTER, authAPI.register);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
}

const initialState: any = {
  login: {
    username: '',
    password: '',
  },
  register: {
    username: '',
    password: '',
    confirmPassword: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions<any | typeAction>(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft: any) => {
        draft[form][key] = value;
      }),
    [INITIALIZE]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      auth,
      authError: null,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      auth,
      authError: null,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);

export default auth;
