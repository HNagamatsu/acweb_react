import { combineReducers } from "redux";

import increments from "reducers/increments";
import wpList from "reducers/wpList";
import wpDetail from "reducers/wpDetail";
import wpSearch from "reducers/wpSearch";
import wpCategories from "reducers/wpCategories";
import wpCategoryPosts from "reducers/wpCategoryPosts";
import wpSkills from "reducers/wpSkills";
import wpJobs from "reducers/wpJobs";

const reducers = combineReducers({
  increments,
  wpList,
  wpDetail,
  wpSearch,
  wpCategories,
  wpCategoryPosts,
  wpSkills,
  wpJobs
});

export default reducers;
