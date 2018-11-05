import { INCREMENTS } from "constant/action";

// 初期ステート設定
const initialState = {
  count: 0,
  text: "test"
};

// actionに応じてステート変更
const increments = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTS: {
      console.log(action);
      return Object.assign({}, state, {
        count: state.count + 1,
        text: action.payload
      });
    }
    default:
      return state;
  }
};
export default increments;
