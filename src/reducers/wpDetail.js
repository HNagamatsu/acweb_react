import { handleActions } from "redux-actions";

import {
  WP_GET_LIST_DETAIL,
  WP_GET_LIST_DETAIL_SUCCESS,
  WP_GET_LIST_DETAIL_FAILE
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

const wpDetail = handleActions(
  {
    WP_GET_LIST_DETAIL: (state, action) => {
      console.log(action);
      return {
        ...state,
        loading: true
      };
    },
    WP_GET_LIST_DETAIL_SUCCESS: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        data: action.payload.data,
        loading: true
      };
    },
    WP_GET_LIST_DETAIL_FAILE: (state, action) => {
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
