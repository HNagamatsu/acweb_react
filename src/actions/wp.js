import { createAction } from "redux-actions";

export const WORDPRESS = "WORDPRESS";
export const WP_GET_LIST = "posts?_embed&filter[posts_per_page]=5";
export const WP_GET_LIST_SUCCESS = "WP_GET_LIST_SUCCESS";
export const WP_GET_LIST_FAILE = "WP_GET_LIST_FAILE";

export const WP_GET_LIST_DETAIL = "posts/";
export const WP_GET_LIST_DETAIL_SUCCESS = "WP_GET_LIST_DETAIL_SUCCESS";
export const WP_GET_LIST_DETAIL_FAILE = "WP_GET_LIST_DETAIL_FAILE";

export const WP_SEARCH = "posts/?args=";
export const WP_SEARCH_SUCCESS = "WP_SEARCH_SUCCESS";
export const WP_SEARCH_FAILE = "WP_SEARCH_FAILE";

export const wp_get = createAction(WP_GET_LIST);
export const wp_getSuccess = createAction(WP_GET_LIST_SUCCESS, ({ data }) => ({
  data
}));

export const wp_getDetail = createAction(WP_GET_LIST_DETAIL, ({ id }) => ({
  id
}));
export const wp_getDetailSuccess = createAction(
  WP_GET_LIST_DETAIL_SUCCESS,
  ({ data }) => ({
    data
  })
);

export const wp_search = createAction(WP_SEARCH, query => ({
  query
}));
export const wp_searchSuccess = createAction(WP_SEARCH_SUCCESS, ({ data }) => ({
  data
}));
