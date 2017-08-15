import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {showModal} from "../../actions";

class SignUpModal extends React.Component {
  render() {
    return (
      <div id="sign-up-modal" className="md-content">
        <h3 className="modal-title">Sign up</h3>
        <div>
          <div>
            <div id="google-sign-up" className="btn"><i className="fa fa-google"></i> Sign up with Google</div>
          </div>
          <div>
            <div id="fb-sign-up" className="btn"><i className="fa fa-facebook-official"></i> Sign up with Facebook</div>
          </div>
          <div>
            <div className="btn btn-green">Sign up with your email</div>
          </div>
          <p>Already have an account ? <span onClick={() => this.props.showModal('LOG_IN_MODAL')}>Log in</span></p>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showModal }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUpModal);