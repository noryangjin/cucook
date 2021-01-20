import { createAction, handleActions } from 'redux-actions';

const MESSAGE = 'message/MESSAGE';

export const changeMessage = createAction(MESSAGE, (value: string) => value);

type ActionType = ReturnType<typeof changeMessage>;

const initialState = {
  message: '',
};

const message = handleActions<any | ActionType>(
  {
    [MESSAGE]: (state, { payload: value }) => ({
      ...state,
      message: value,
    }),
  },
  initialState
);

export default message;
