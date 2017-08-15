import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUpModal from './SignUpModal';
import { hideModal } from '../../actions/index';
import LogInModal from "./LogInModal";
import SignalModal from "./SignalModal";

const MODAL_COMPONENTS = {
  'SIGN_UP_MODAL': SignUpModal,
  'LOG_IN_MODAL': LogInModal,
  'SIGNAL_MODAL': SignalModal
  /* other modals */
};

class ModalRoot extends React.Component {
  render() {
    let modal;
    if (!this.props.modalType) {
      modal = null;
    } else {
      const SpecificModal = MODAL_COMPONENTS[this.props.modalType];
      modal = <div key="0">
                <div className="md-modal">
                  <div className="md-inside">
                    <div className="close-button" onClick={() => this.props.hideModal()}><i className="fa fa-window-close"></i></div>
                    <SpecificModal {...this.props.modalProps} />
                  </div>
                </div>
                <div className="md-overlay"></div>
              </div>;
    }

    return (
      <ReactCSSTransitionGroup
        transitionName="modal"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        {modal}
      </ReactCSSTransitionGroup>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideModal }, dispatch)
}


export default connect(state => state.modal, mapDispatchToProps)(ModalRoot)