import { handleActions } from "redux-actions";

import {
  WP_GET_SKILLS,
  WP_GET_SKILLS_SUCCESS,
  WP_GET_SKILLS_FAILE
} from "actions/wp";
// 初期ステート設定
const initialState = {
  loading: false,
  error: null,
  data: [{ name: "" }]
};

const wpSkills = handleActions(
  {
    WP_GET_SKILLS: (state, action) => {
      console.log(action);
      return {
        ...state,
        loading: true
      };
    },
    WP_GET_SKILLS_SUCCESS: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        data: action.payload.data,
        loading: true
      };
    },
    WP_GET_SKILLS_FAILE: (state, action) => {
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

export default wpSkills;
