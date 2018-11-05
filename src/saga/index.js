import { fork, take, put, call, select, cancel } from "redux-saga/effects";
import { delay } from "redux-saga";

//actionTypes
import { WORDPRESS_GET } from "actions/wp";

// リスト一覧取得
export function* handleGetList() {
  while (true) {
    try {
      const action = yield take(WORDPRESS_GET);
      console.log(action);
    } catch (e) {
      console.log(e);
    }
  }
}

export default function* rootSaga() {
  yield fork(handleGetList);
}
