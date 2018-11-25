import { connect } from "react-redux";
import Detail from "components/Detail";
import { wp_getDetail } from "actions/wp";

export default connect(
  state => ({
    wpDetail: state.wpDetail
  }),
  { wp_getDetail }
)(Detail);
