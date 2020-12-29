import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';

const rootReducer = combineReducers({
  post,
  auth,
  user,
  loading,
  write,
});

export function* rootSaga() {
  yield all([postSaga(), authSaga(), userSaga(), writeSaga()]);
}
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
