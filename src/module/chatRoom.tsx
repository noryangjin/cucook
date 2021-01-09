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
const ROOM_OPTION = 'chatRoom/ROOM_OPTION';
const ROOM_OPTION_INITIALIZE = 'chatRoom/ROOM_OPTION_INITIALIZE';

type insert = {
  title: string;
  max: number;
  password: string;
};

export const createRoom = createAction(
  ROOM_CREATE,
  ({ title, max, password }: insert) => ({ title, max, password })
);
export const roomOption = createAction(ROOM_OPTION, ({ key, value }: any) => ({
  key,
  value,
}));

export const readRoomList = createAction(ROOM_LIST);
export const roomOpionInitialize = createAction(ROOM_OPTION_INITIALIZE);

type typeAction =
  | ReturnType<typeof createRoom>
  | ReturnType<typeof roomOption>
  | ReturnType<typeof readRoomList>
  | ReturnType<typeof roomOpionInitialize>;

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
    [ROOM_OPTION]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [ROOM_CREATE_SUCCESS]: (state, { payload: chatRoom }) => ({
      ...state,
      title: '',
      max: 0,
      password: '',
      chatRoom,
    }),
    [ROOM_CREATE_FAILURE]: (state, { payload: chatRoomError }) => ({
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
    [ROOM_LIST_FAILURE]: (state, { payload: roomListError }) => ({
      ...state,
      roomList: null,
      roomListError,
    }),
    [ROOM_OPTION_INITIALIZE]: (state) => ({
      ...state,
      title: '',
      max: 0,
      password: '',
      chatRoom: null,
      chatRoomError: null,
    }),
  },
  initialState
);

export default chatRoom;
