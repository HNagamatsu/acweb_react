import { handleActions } from "redux-actions";

import {
  WP_GET_LIST,
  WP_GET_LIST_SUCCESS,
  WP_GET_LIST_FAILE
} from "actions/wp";
// 初期ステート設定
const initialState = {
  loading: false,
  error: null,
  data: []
};

const wpList = handleActions(
  {
    WP_GET_LIST: (state, action) => {
      return {
        ...state,
        loading: true
      };
    },
    WP_GET_LIST_SUCCESS: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        data: action.payload.data,
        loading: true
      };
    },
    WP_GET_LIST_FAILE: (state, action) => {
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
