import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal } from "../../actions";
import LoginForm from "../Form/LoginForm";

class LogInModal extends React.Component {
  render() {
    return (
      <div id="sign-up-modal" className="md-content">
        <h3 className="modal-title">Log in</h3>
        <div>
          <div>
            <div id="google-sign-up" className="btn"><i className="fa fa-google"></i> Log in with Google</div>
          </div>
          <div>
            <div id="fb-sign-up" className="btn"><i className="fa fa-facebook-official"></i> Log in with Facebook</div>
          </div>
          <LoginForm/>
          <p>Don't have an account ? <span onClick={() => this.props.showModal('SIGN_UP_MODAL')}>Sign up</span></p>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showModal }, dispatch)
}

export default connect(null, mapDispatchToProps)(LogInModal);