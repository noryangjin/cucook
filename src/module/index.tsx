import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import comment, { commentSaga } from './comment';
import posts, { postsSaga } from './posts';
import chatRoom, { chatRoomSaga } from './chatRoom';
import chatReadRoom, { chatReadRoomSaga } from './chatReadRoom';
import searchPost, { searchPostSaga } from './searchPost';
import message from './message';

const rootReducer = combineReducers({
  chatRoom,
  chatReadRoom,
  posts,
  comment,
  post,
  auth,
  user,
  loading,
  write,
  searchPost,
  message,
});

export function* rootSaga() {
  yield all([
    searchPostSaga(),
    chatReadRoomSaga(),
    chatRoomSaga(),
    postsSaga(),
    commentSaga(),
    postSaga(),
    authSaga(),
    userSaga(),
    writeSaga(),
  ]);
}
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
