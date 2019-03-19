// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Home } from "../components/Home";
// import {  }
function mapStateToProps( state ) {
    return {
        // counter: state.counter
    };
}
function mapDispatchToProps( dispatch ) {
    // return bindActionCreators( AuthenticatorActions, dispatch );
}

export const HomePage : React.ComponentClass  = connect(
    mapStateToProps,
    mapDispatchToProps
)( Home );
