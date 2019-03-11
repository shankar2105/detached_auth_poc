import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Home from "../components/Home";
import * as AuthenticatorActions from "../actions/authenticator_actions";
function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthenticatorActions, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
