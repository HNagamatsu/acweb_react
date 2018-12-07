import { connect } from "react-redux";
import Category from "components/Category";
import { wp_getCategoryPosts, wp_getCategories } from "actions/wp";

export default connect(
  state => ({
    wpCategoryPosts: state.wpCategoryPosts,
    wpCategories: state.wpCategories
  }),
  {
    wp_getCategoryPosts,
    wp_getCategories
  }
)(Category);
