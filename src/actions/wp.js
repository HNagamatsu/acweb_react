import { createAction } from "redux-actions";

export const WORDPRESS = "WORDPRESS";
export const WP_GET_LIST = "posts?_embed";
export const WP_GET_LIST_SUCCESS = "WP_GET_LIST_SUCCESS";
export const WP_GET_LIST_FAILE = "WP_GET_LIST_FAILE";

export const WP_GET_LIST_DETAIL = "posts/";
export const WP_GET_LIST_DETAIL_SUCCESS = "WP_GET_LIST_DETAIL_SUCCESS";
export const WP_GET_LIST_DETAIL_FAILE = "WP_GET_LIST_DETAIL_FAILE";

export const WP_SEARCH = "posts?search=";
export const WP_SEARCH_SUCCESS = "WP_SEARCH_SUCCESS";
export const WP_SEARCH_FAILE = "WP_SEARCH_FAILE";

export const WP_GET_CATEGORIES = "tokyo";
export const WP_GET_CATEGORIES_SUCCESS = "WP_GET_CATEGORIES_SUCCESS";
export const WP_GET_CATEGORIES_FAILE = "WP_GET_CATEGORIES_FAILE";

export const WP_GET_CATEGORY_POSTS = "posts?_embed&";
export const WP_GET_CATEGORY_POSTS_SUCCESS = "WP_GET_CATEGORY_POSTS_SUCCESS";
export const WP_GET_CATEGORY_POSTS_FAILE = "WP_GET_CATEGORY_POSTS_FAILE";

export const WP_GET_SKILLS = "skill";
export const WP_GET_SKILLS_SUCCESS = "WP_GET_SKILLS_SUCCESS";
export const WP_GET_SKILLS_FAILE = "WP_GET_SKILLS_FAILE";

export const WP_GET_JOBS = "job";
export const WP_GET_JOBS_SUCCESS = "WP_GET_JOBS_SUCCESS";
export const WP_GET_JOBS_FAILE = "WP_GET_JOBS_FAILE";

export const wp_getList = createAction(WP_GET_LIST, page => ({
  url: "posts?_embed&filter[posts_per_page]=5",
  page
}));
export const wp_getSuccess = createAction(WP_GET_LIST_SUCCESS, data => data);

export const wp_getDetail = createAction(WP_GET_LIST_DETAIL, ({ id }) => ({
  id
}));
export const wp_getDetailSuccess = createAction(
  WP_GET_LIST_DETAIL_SUCCESS,
  ({ data }) => ({
    data
  })
);

export const wp_search = createAction(WP_SEARCH, ({ query, page }) => ({
  query,
  page
}));

export const wp_searchSuccess = createAction(
  WP_GET_CATEGORY_POSTS_SUCCESS,
  data => data
);

export const wp_getCategories = createAction(WP_GET_CATEGORIES, slug => ({
  slug
}));
export const wp_getCategoriesSuccess = createAction(
  WP_GET_CATEGORIES_SUCCESS,
  ({ data }) => ({
    data
  })
);

export const wp_getCategoryPosts = createAction(
  WP_GET_CATEGORY_POSTS,
  ({ slug, id, page }) => ({
    slug,
    id,
    page
  })
);
export const wp_getCategoryPostsSuccess = createAction(
  WP_GET_CATEGORY_POSTS_SUCCESS,
  data => data
);

export const wp_getSkills = createAction(WP_GET_SKILLS);

export const wp_getSkillsSuccess = createAction(
  WP_GET_SKILLS_SUCCESS,
  ({ data }) => ({
    data
  })
);

export const wp_getJobs = createAction(WP_GET_JOBS);

export const wp_getJobsSuccess = createAction(
  WP_GET_JOBS_SUCCESS,
  ({ data }) => ({
    data
  })
);
