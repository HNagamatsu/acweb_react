import { connect } from 'react-redux'
import Hello from 'components/Hello'
import { increments } from 'actions/inclements'

export default connect(
  state => ({
    count: state.increments.count,
    text: state.increments.text
  }),
  { increments }
)(Hello)
