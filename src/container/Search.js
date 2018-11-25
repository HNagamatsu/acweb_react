import { connect } from "react-redux";
import Search from "components/Search";
import { wp_search } from "actions/wp";

export default connect(
  state => ({
    wpSearch: state.wp
  }),
  { wp_search }
)(Search);
