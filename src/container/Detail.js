import { connect } from "react-redux";
import Detail from "components/Detail";
import {
  wp_getDetail,
  wp_getCategories,
  wp_getSkills,
  wp_getJobs,
  wp_search
} from "actions/wp";

export default connect(
  state => ({
    wpDetail: state.wpDetail,
    wpCategories: state.wpCategories,
    wpSkills: state.wpSkills,
    wpJobs: state.wpJobs
  }),
  {
    wp_getDetail,
    wp_getCategories,
    wp_getSkills,
    wp_getJobs
  }
)(Detail);
