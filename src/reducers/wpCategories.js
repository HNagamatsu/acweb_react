import { handleActions } from "redux-actions";

import {
  WP_GET_CATEGORIES,
  WP_GET_CATEGORIES_SUCCESS,
  WP_GET_CATEGORIES_FAILE
} from "actions/wp";
// 初期ステート設定
const initialState = {
  loading: false,
  error: null,
  data: [{ name: "" }]
};

const wpDetail = handleActions(
  {
    WP_GET_CATEGORIES: (state, action) => {
      console.log(action);
      return {
        ...state,
        loading: true
      };
    },
    WP_GET_CATEGORIES_SUCCESS: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        data: action.payload.data,
        loading: true
      };
    },
    WP_GET_CATEGORIES_FAILE: (state, action) => {
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

export default wpDetail;
