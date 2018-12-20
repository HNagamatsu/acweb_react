import { connect } from "react-redux";
import Category from "components/Category";
import {
  wp_getCategoryPosts,
  wp_getCategories,
  wp_getSkills,
  wp_getJobs,
  wp_search
} from "actions/wp";

export default connect(
  state => ({
    wpList: state.wpList,
    wpCategories: state.wpCategories,
    wpSkills: state.wpSkills,
    wpJobs: state.wpJobs
  }),
  {
    wp_getCategoryPosts,
    wp_getCategories,
    wp_getSkills,
    wp_getJobs,
    wp_search
  }
)(Category);
