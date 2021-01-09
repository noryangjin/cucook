import { createAction, handleActions } from 'redux-actions';

const SOCKET = 'socket/SOCKET';
const SOCKET_UNLOAD = 'socket/SOCKET_UNLOAD';

export const connectSocket = createAction(SOCKET, (socket: any) => socket);
export const socketUnload = createAction(SOCKET_UNLOAD);

type ActionType =
  | ReturnType<typeof connectSocket>
  | ReturnType<typeof socketUnload>;

const initialState = {
  socket: null,
};

const socket = handleActions<any | ActionType>(
  {
    [SOCKET]: (state, { payload: socket }) => ({
      ...state,
      socket,
    }),
    [SOCKET_UNLOAD]: () => initialState,
  },
  initialState
);

export default socket;
