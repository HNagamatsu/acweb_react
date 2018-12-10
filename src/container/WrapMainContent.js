import { connect } from "react-redux";
import WrapMainContent from "components/WrapMainContent";
import { wp_getCategories, wp_getSkills, wp_getJobs } from "actions/wp";

export default connect(
  state => ({
    wpCategories: state.wpCategories,
    wpSkills: state.wpSkills,
    wpJobs: state.wpJobs
  }),
  {
    wp_getCategories,
    wp_getSkills,
    wp_getJobs
  }
)(WrapMainContent);
