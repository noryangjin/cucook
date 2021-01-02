import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING' as const;
const FINISH_LOADING = 'loading/FINISH_LOADING' as const;

export const startLoading = createAction(
  START_LOADING,
  (requestType: string) => requestType
);
export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType: string) => requestType
);

type typeAction =
  | ReturnType<typeof startLoading>
  | ReturnType<typeof finishLoading>;

const initialState: any = {};

const loading = handleActions<any | typeAction>(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState
);

export default loading;
