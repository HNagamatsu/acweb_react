import { handleActions } from "redux-actions";

import { WP_SEARCH, WP_SEARCH_SUCCESS, WP_SEARCH_FAILE } from "actions/wp";
// 初期ステート設定
const initialState = {
  loading: false,
  error: null,
  data: []
};

const wpSearch = handleActions(
  {
    WP_SEARCH: (state, action) => {
      return {
        ...state,
        loading: true
      };
    },
    WP_SEARCH_SUCCESS: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        data: action.payload.data,
        loading: true
      };
    },
    WP_SEARCH_FAILE: (state, action) => {
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

export default wpSearch;
