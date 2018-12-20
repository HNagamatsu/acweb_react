import { combineReducers } from "redux";

import increments from "reducers/increments";
import wpList from "reducers/wpList";
import wpDetail from "reducers/wpDetail";
import wpCategories from "reducers/wpCategories";
import wpSkills from "reducers/wpSkills";
import wpJobs from "reducers/wpJobs";

const reducers = combineReducers({
  increments,
  wpList,
  wpDetail,
  wpCategories,
  wpSkills,
  wpJobs
});

export default reducers;
