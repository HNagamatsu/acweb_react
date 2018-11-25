import { combineReducers } from "redux";

import increments from "reducers/increments";
import wp from "reducers/wp";
import wpDetail from "reducers/wpDetail";
import wpSearch from "reducers/wpSearch";

const reducers = combineReducers({
  increments,
  wp,
  wpDetail,
  wpSearch
});

export default reducers;
