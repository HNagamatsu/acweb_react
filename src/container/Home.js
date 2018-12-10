import { connect } from "react-redux";
import Home from "components/Home";
import {
  wp_getList,
  wp_getCategories,
  wp_getSkills,
  wp_getJobs
} from "actions/wp";

export default connect(
  state => ({
    wpList: state.wpList,
    wpCategories: state.wpCategories,
    wpSkills: state.wpSkills,
    wpJobs: state.wpJobs
  }),
  {
    wp_getList,
    wp_getCategories,
    wp_getSkills,
    wp_getJobs
  }
)(Home);
