import axios from "axios";
import { fork, take, put, call, select, cancel } from "redux-saga/effects";
import { delay } from "redux-saga";

//actionTypes
import {
  WP_GET_LIST,
  WP_GET_LIST_DETAIL,
  WP_SEARCH,
  WP_GET_CATEGORIES,
  WP_GET_CATEGORY_POSTS,
  WP_GET_SKILLS,
  WP_GET_SKILL_POSTS
} from "actions/wp";
import {
  wp_getSuccess,
  wp_getDetailSuccess,
  wp_searchSuccess,
  wp_getCategoriesSuccess,
  wp_getCategoryPostsSuccess,
  wp_getSkillsSuccess
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

export function* handleGetCategories() {
  while (true) {
    try {
      const action = yield take(WP_GET_CATEGORIES);
      console.log(action);

      const result = yield call(xhrRequest.get, action.type, {
        params: {
          slug: action.payload.slug,
          per_page: 30,
          parent: 34
        }
      });
      console.log(result);
      if (result.status === 200) {
        yield put(wp_getCategoriesSuccess(result));
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export function* handleGetCategoryPosts() {
  while (true) {
    try {
      const action = yield take(WP_GET_CATEGORY_POSTS);
      console.log(action);

      const result = yield call(
        xhrRequest.get,
        action.type + action.payload.id
      );
      console.log(result);
      if (result.status === 200) {
        yield put(wp_getCategoryPostsSuccess(result));
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export function* handleGetSkills() {
  while (true) {
    try {
      const action = yield take(WP_GET_SKILLS);
      console.log(action);

      const result = yield call(xhrRequest.get, action.type);
      console.log(result);
      if (result.status === 200) {
        yield put(wp_getSkillsSuccess(result));
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export function* handleGetSkillPosts() {
  while (true) {
    try {
      const action = yield take(WP_GET_SKILL_POSTS);
      console.log(action);

      const result = yield call(
        xhrRequest.get,
        action.type + action.payload.id
      );
      console.log(result);
      if (result.status === 200) {
        yield put(wp_getSkillPostsSuccess(result));
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default function* rootSaga() {
  yield fork(handleGetList);
  yield fork(handleGetListDetail);
  yield fork(handleSearch);
  yield fork(handleGetCategories);
  yield fork(handleGetCategoryPosts);
  yield fork(handleGetSkills);
  yield fork(handleGetSkillPosts);
}
