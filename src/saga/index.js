import axios from "axios";
import {
  fork,
  take,
  put,
  call,
  select,
  cancel,
  takeEvery
} from "redux-saga/effects";
import { delay } from "redux-saga";

//actionTypes
import {
  WP_GET_LIST,
  WP_GET_LIST_DETAIL,
  WP_SEARCH,
  WP_GET_CATEGORIES,
  WP_GET_CATEGORY_POSTS,
  WP_GET_SKILLS,
  WP_GET_JOBS
} from "actions/wp";
import {
  wp_getSuccess,
  wp_getDetailSuccess,
  wp_searchSuccess,
  wp_getCategoriesSuccess,
  wp_getCategoryPostsSuccess,
  wp_getSkillsSuccess,
  wp_getJobsSuccess
} from "actions/wp";

const timeout = 30000;

// const baseURL = "http://localhost:3005/";
const baseURL =
  NODE_ENV === "production"
    ? "http://nagamatsu.acweb.co.jp/wp-json/wp/v2/"
    : "http://localhost:8888/wordpress/wp-json/wp/v2/";

const xhrRequest = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json"
  },
  timeout
});

// リスト一覧取得
function* handleGetList(action) {
  try {
    console.log(action.payload.page);
    const result = yield call(xhrRequest.get, action.payload.url, {
      params: {
        per_page: 5,
        page: action.payload.page
      }
    });
    //総投稿数
    const total = result.headers["x-wp-total"];

    //総ページ数
    const totalPages = result.headers["x-wp-totalpages"];

    yield put(
      wp_getSuccess({
        ...result,
        total,
        totalPages
      })
    );
  } catch (e) {
    console.log(e);
  }
}

function* handleGetListDetail(action) {
  try {
    const result = yield call(xhrRequest.get, action.type + action.payload.id);
    yield put(wp_getDetailSuccess(result));
  } catch (e) {
    console.log(e);
  }
}

function* handleSearch(action) {
  try {
    const result = yield call(
      xhrRequest.get,
      action.type + action.payload.query,
      {
        params: {
          per_page: 5,
          page: action.payload.page
        }
      }
    );

    //総投稿数
    const total = result.headers["x-wp-total"];
    //総ページ数
    const totalPages = result.headers["x-wp-totalpages"];

    yield put(
      wp_searchSuccess({
        ...result,
        total,
        totalPages
      })
    );
  } catch (e) {}
}

function* handleGetCategories(action) {
  try {
    const result = yield call(xhrRequest.get, action.type, {
      params: {
        slug: action.payload.slug,
        parent: 34
      }
    });

    yield put(wp_getCategoriesSuccess(result));
  } catch (e) {
    console.log(e);
  }
}

function* handleGetCategoryPosts(action) {
  try {
    const result = yield call(
      xhrRequest.get,
      action.type + action.payload.slug + "=" + action.payload.id,
      {
        params: {
          per_page: 5,
          page: action.payload.page
        }
      }
    );
    console.log(result.headers, "-----headers------");
    //総投稿数
    const total = result.headers["x-wp-total"];
    console.log(total, "-----total------");

    //総ページ数
    const totalPages = result.headers["x-wp-totalpages"];
    console.log(totalPages, "-----totalPages------");

    yield put(
      wp_getCategoryPostsSuccess({
        ...result,
        total,
        totalPages
      })
    );
  } catch (e) {
    console.log(e);
  }
}

function* handleGetSkills(action) {
  try {
    const result = yield call(xhrRequest.get, action.type);
    yield put(wp_getSkillsSuccess(result));
  } catch (e) {
    console.log(e);
  }
}

function* handleGetJobs(action) {
  try {
    const result = yield call(xhrRequest.get, action.type);
    yield put(wp_getJobsSuccess(result));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeEvery(WP_GET_LIST, handleGetList);
  yield takeEvery(WP_GET_LIST_DETAIL, handleGetListDetail);
  yield takeEvery(WP_SEARCH, handleSearch);
  yield takeEvery(WP_GET_CATEGORIES, handleGetCategories);
  yield takeEvery(WP_GET_CATEGORY_POSTS, handleGetCategoryPosts);
  yield takeEvery(WP_GET_SKILLS, handleGetSkills);
  yield takeEvery(WP_GET_JOBS, handleGetJobs);
}
