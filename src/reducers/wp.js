import { WORDPRESS_GET } from "actions/wp";
// 初期ステート設定
const initialState = {
  data: []
};

// actionに応じてステート変更
const wp = (state = initialState, action) => {
  switch (action.type) {
    case WORDPRESS_GET: {
      console.log(action);
      return state;
    }
    default:
      return state;
  }
};
export default wp;
