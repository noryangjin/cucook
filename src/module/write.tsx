import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

type typeChangeField = {
  key: string;
  value: string;
};

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }: typeChangeField) => ({ key, value })
);

type typeAction =
  | ReturnType<typeof initialize>
  | ReturnType<typeof changeField>;
type typeInitialState = {
  title: string;
  body: string | any;
  tags: Array<string>;
};

const initialState: typeInitialState = {
  title: '',
  body: '',
  tags: [],
};

const write = handleActions<(typeInitialState | any) | typeAction>(
  {
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
  },
  initialState
);

export default write;
