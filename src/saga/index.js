import axios from "axios";
import { fork, take, put, call, select, cancel } from "redux-saga/effects";
import { delay } from "redux-saga";

//actionTypes
import { WP_GET_LIST, WP_GET_LIST_DETAIL, WP_SEARCH } from "actions/wp";
import {
  wp_get,
  wp_getSuccess,
  wp_getDetailSuccess,
  wp_searchSuccess
} from "actions/wp";

const timeout = 30000;

// const baseURL = "http://localhost:3005/";
const baseURL =
  NODE_ENV === "production"
    ? "http://acweb.co.jp"
    : "http://localhost:8888/wordpress/wp-json/wp/v2/";

const xhrRequest = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json"
  },
  timeout
});

// リスト一覧取得
export function* handleGetList() {
  while (true) {
    try {
      const action = yield take(WP_GET_LIST);
      console.log(action.type);

      const result = yield call(xhrRequest.get, action.type);
      console.log(result);
      if (result.status === 200) {
        yield put(wp_getSuccess(result));
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export function* handleGetListDetail() {
  while (true) {
    try {
      const action = yield take(WP_GET_LIST_DETAIL);
      console.log(action);

      const result = yield call(
        xhrRequest.get,
        action.type + action.payload.id
      );
      console.log(result);
      if (result.status === 200) {
        yield put(wp_getDetailSuccess(result));
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export function* handleSearch() {
  while (true) {
    try {
      const action = yield take(WP_SEARCH);
      console.log(action);

      const result = yield call(
        xhrRequest.get,
        action.type + action.payload.query
      );
      console.log(result);
      if (result.status === 200) {
        yield put(wp_searchSuccess(result));
      }
    } catch (e) {
      console.log(e);
    }
  }
}

// マイリスト一覧取得
// export function* handleGetMyList() {
//   while (true) {
//     try {
//       const { payload } = yield take(GET_MYLIST);
//       const { url, productId } = payload;
//       const result = yield call(xhrRequest.get, url, {
//         params: {
//           productId
//         }
//       });
//       if (result.data.success) {
//         yield put(getMyListSuccess(result));
//       } else {
//         yield put(modalOpen({ errorCode: result.data.error.code }));
//       }
//     } catch (e) {
//       yield error(e);
//     }
//   }
// }

export default function* rootSaga() {
  yield fork(handleGetList);
  yield fork(handleGetListDetail);
  yield fork(handleSearch);
}
