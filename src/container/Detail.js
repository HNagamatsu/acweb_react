import { connect } from "react-redux";
import Detail from "components/Detail";
import { wp_getDetail, wp_getCategories } from "actions/wp";

export default connect(
  state => ({
    wpDetail: state.wpDetail,
    wpCategories: state.wpCategories
  }),
  { wp_getDetail, wp_getCategories }
)(Detail);
