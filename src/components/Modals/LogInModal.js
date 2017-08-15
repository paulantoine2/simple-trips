import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {showModal} from "../../actions";

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
          <div>
            <input type="email" placeholder="E-mail address" className="bordered-input form-item"/>
            <input type="password" placeholder="Password" className="bordered-input form-item"/>
            <div className="form-item">
              <label className="control control-checkbox">
                Remember me
                <input type="checkbox" />
                <div className="control_indicator"></div>
              </label>
              <a href="/">Forgot password</a>
            </div>
            <div className="btn btn-green">Log in</div>
          </div>
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