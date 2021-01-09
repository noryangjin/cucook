import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as chatRoomAPI from '../lib/api/chatRoom';

const [
  READ_ROOM,
  READ_ROOM_SUCCESS,
  READ_ROOM_FAILURE,
] = createRequestActionTypes('chatReadRoom/READ_ROOM');
const INITIALIZEROOM = 'chatReadRoom/INITIALIZEROOM';

type insert = {
  roomId: string;
  password?: string;
};

export const readRoom = createAction(
  READ_ROOM,
  ({ roomId, password }: insert) => ({ roomId, password })
);
export const initializeRoom = createAction(INITIALIZEROOM);

type typeAction = ReturnType<typeof readRoom>;

const readRoomSaga = createRequestSaga(READ_ROOM, chatRoomAPI.readRoom);
export function* chatReadRoomSaga() {
  yield takeLatest(READ_ROOM, readRoomSaga);
}

const initialState = {
  room: null,
  roomError: null,
};

const chatReadRoom = handleActions<any | typeAction>(
  {
    [READ_ROOM_SUCCESS]: (state, { payload: room }) => ({
      ...state,
      room,
    }),
    [READ_ROOM_FAILURE]: (state, { payload: roomError }) => ({
      ...state,
      room: null,
      roomError,
    }),
    [INITIALIZEROOM]: () => initialState,
  },
  initialState
);

export default chatReadRoom;
