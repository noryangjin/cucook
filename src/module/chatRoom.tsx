import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as chatRoomAPI from '../lib/api/chatRoom';

const [
  ROOM_CREATE,
  ROOM_CREATE_SUCCESS,
  ROOM_CREATE_FAILURE,
] = createRequestActionTypes('chatRoom/ROOM_CREATE');
const [
  ROOM_LIST,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAILURE,
] = createRequestActionTypes('chatRoom/ROOM_LIST');

type insert = {
  title: string;
  max: number;
  password: string;
};

export const createRoom = createAction(
  ROOM_CREATE,
  ({ title, max, password }: insert) => ({ title, max, password })
);
export const readRoomList = createAction(ROOM_LIST);

type typeAction =
  | ReturnType<typeof createRoom>
  | ReturnType<typeof readRoomList>;

const createRoomSaga = createRequestSaga(
  ROOM_CREATE,
  chatRoomAPI.createChatRoom
);
const readRoomListSaga = createRequestSaga(ROOM_LIST, chatRoomAPI.readRoomList);

export function* chatRoomSaga() {
  yield takeLatest(ROOM_CREATE, createRoomSaga);
  yield takeLatest(ROOM_LIST, readRoomListSaga);
}

const initialState = {
  title: '',
  max: 0,
  password: '',
  chatRoom: null,
  chatRoomError: null,
  roomList: null,
  roomListError: null,
};

const chatRoom = handleActions<any | typeAction>(
  {
    [ROOM_CREATE]: (state, { payload: { title, max, password } }) => ({
      ...state,
      title,
      max,
      password,
    }),
    [ROOM_CREATE_SUCCESS]: (state, { payload: chatRoom }) => ({
      ...state,
      title: '',
      max: 0,
      password: '',
      chatRoom,
    }),
    [ROOM_LIST_FAILURE]: (state, { payload: chatRoomError }) => ({
      ...state,
      title: '',
      max: 0,
      password: '',
      chatRoom: null,
      chatRoomError,
    }),
    [ROOM_LIST_SUCCESS]: (state, { payload: roomList }) => ({
      ...state,
      roomList,
    }),
    [ROOM_CREATE_FAILURE]: (state, { payload: roomListError }) => ({
      ...state,
      roomList: null,
      roomListError,
    }),
  },
  initialState
);

export default chatRoom;
