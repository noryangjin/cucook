import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE = 'auth/INITIALIZE';

type changeField_type = {
  form: string;
  key: string;
  value: string;
};

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }: changeField_type) => ({ form, key, value })
);

export const initialize = createAction(INITIALIZE, (form: string) => form);

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
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce((state, draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState
);

export default auth;
