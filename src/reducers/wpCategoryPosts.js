import { handleActions } from "redux-actions";

import {
  WP_GET_CATEGORY_POSTS,
  WP_GET_CATEGORY_POSTS_SUCCESS,
  WP_GET_CATEGORY_POSTS_FAILE
} from "actions/wp";
// 初期ステート設定
const initialState = {
  loading: false,
  error: null,
  data: {
    title: "",
    content: ""
  }
};

const wpCategoryPosts = handleActions(
  {
    WP_GET_CATEGORY_POSTS: (state, action) => {
      console.log(action);
      return {
        ...state,
        loading: true
      };
    },
    WP_GET_CATEGORY_POSTS_SUCCESS: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        data: action.payload.data,
        loading: true
      };
    },
    WP_GET_CATEGORY_POSTS_FAILE: (state, action) => {
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

export default wpCategoryPosts;
