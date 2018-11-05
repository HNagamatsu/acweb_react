import { combineReducers } from "redux";

import increments from "reducers/increments";
import wp from "reducers/wp";

const reducers = combineReducers({
  increments,
  wp
});

export default reducers;
