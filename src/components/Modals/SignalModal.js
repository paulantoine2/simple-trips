import React from 'react';
import {RadioGroup, Radio} from 'react-radio-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {hideModal} from "../../actions";

class SignalModal extends React.Component {
  render() {
    return (
      <div id="signal-modal" className="md-content">
        <h3 className="modal-title">Signal this content</h3>
        <div>
          <p>Please choose a reason to help us process the report</p>
          <RadioGroup name="fruit">
            <label className="control control-radio">
              <div className="label">Inappropriate content</div>
              <div className="label-subtitle">Ce commentaire présente un caractère violent, graphique, promotionnel ou offensant.</div>
              <Radio id="signal_1" value="signal_1" />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-radio">
              <div className="label">Dishonest or hateful content</div>
              <div className="label-subtitle">Ce commentaire est délibérément malveillant et agressif.</div>
              <Radio id="signal_2" value="signal_2" />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-radio">
              <div className="label">Fake content</div>
              <div className="label-subtitle">Ce commentaire contient de fausses informations ou il peut s'agir d'un faux commentaire.</div>
              <Radio id="signal_3" value="signal_3" />
              <div className="control_indicator"></div>
            </label>
          </RadioGroup>
          <div className="form-actions">
            <div className="btn btn-gray" onClick={() => this.props.hideModal()}>Cancel</div>
            {/* TODO : Report data is in props */}
            <div className="btn btn-green">Next</div>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideModal }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignalModal);