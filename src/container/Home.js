import { connect } from "react-redux";
import Home from "components/Home";
import { wp_getList, wp_getCategories, wp_getSkills } from "actions/wp";

export default connect(
  state => ({
    wpList: state.wpList,
    wpCategories: state.wpCategories,
    wpSkills: state.wpSkills
  }),
  {
    wp_getList,
    wp_getCategories,
    wp_getSkills
  }
)(Home);
