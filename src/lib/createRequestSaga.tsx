import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../module/loading';

export const createRequestActionTypes = (type: string) => {
  const SUCCESS = `${type}_SUCCESS` as const;
  const FAILURE = `${type}_FAILURE` as const;

  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type: string, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: any) {
    yield put(startLoading(type));
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}
