import { handleActions } from "redux-actions";

import {
  WP_GET_LIST,
  WP_GET_LIST_SUCCESS,
  WP_GET_LIST_FAILE,
  WP_SEARCH,
  WP_SEARCH_SUCCESS,
  WP_SEARCH_FAILE,
  WP_GET_CATEGORY_POSTS,
  WP_GET_CATEGORY_POSTS_SUCCESS,
  WP_GET_CATEGORY_POSTS_FAILE,
  WP_GET_LIST_DETAIL,
  WP_GET_LIST_DETAIL_SUCCESS,
  WP_GET_LIST_DETAIL_FAILE
} from "actions/wp";
// 初期ステート設定
const initialState = {
  loading: false,
  error: null,
  data: [],
  total: null,
  totalPages: null
};

const wpList = handleActions(
  {
    [WP_GET_LIST]: (state, action) => {
      return {
        ...state,
        data: [],
        loading: true
      };
    },
    [WP_GET_LIST_SUCCESS]: (state, action) => {
      return {
        ...state,
        data: action.payload.data,
        total: action.payload.total,
        totalPages: action.payload.totalPages,
        loading: false
      };
    },
    [WP_GET_LIST_FAILE]: (state, action) => {
      return {
        ...state,
        data: [],
        loading: false,
        error: true
      };
    },
    [WP_SEARCH]: (state, action) => {
      return {
        ...state,
        data: [],
        loading: true
      };
    },
    [WP_SEARCH_SUCCESS]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        data: action.payload.data,
        total: action.payload.total,
        totalPages: action.payload.totalPages,
        loading: false
      };
    },
    [WP_SEARCH_FAILE]: (state, action) => {
      return {
        ...state,
        data: [],
        loading: false,
        error: true
      };
    },
    [WP_GET_CATEGORY_POSTS]: (state, action) => {
      console.log(action);
      return {
        ...state,
        data: [],
        loading: true
      };
    },
    [WP_GET_CATEGORY_POSTS_SUCCESS]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        data: action.payload.data,
        total: action.payload.total,
        totalPages: action.payload.totalPages,
        loading: false
      };
    },
    [WP_GET_CATEGORY_POSTS_FAILE]: (state, action) => {
      return {
        ...state,
        data: [],
        loading: false,
        error: true
      };
    },
    [WP_GET_LIST_DETAIL]: (state, action) => {
      console.log(action);
      return {
        ...state,
        data: [],
        loading: true
      };
    },
    [WP_GET_LIST_DETAIL_SUCCESS]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    },
    [WP_GET_LIST_DETAIL_FAILE]: (state, action) => {
      return {
        ...state,
        data: [],
        loading: false,
        error: true
      };
    }
  },
  initialState
);

export default wpList;
