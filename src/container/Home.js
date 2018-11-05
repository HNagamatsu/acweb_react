import { connect } from "react-redux";
import Home from "components/Home";
import { wp_get } from "actions/wp";

export default connect(
  state => ({
    wp: state.wpa
  }),
  { wp_get }
)(Home);
