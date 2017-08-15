import React from 'react';
import classNames from 'classnames';

export default class HomeSearchBox extends React.Component {
  constructor(){
    super();
    this.state = {
      explore: true
    }
  }

  render() {
    return (
      <div id="search-box">
        <div className="tabs">
          <div onClick={() => this.setState({explore : true})} className={classNames('tab', 'trips', { 'active' : this.state.explore })}>
            <span><i className="fa fa-compass"></i> Explore trips</span>
          </div>
          <div onClick={() => this.setState({explore : false})} className={classNames('tab', 'find-adverts', { 'active' : !this.state.explore })}>
            <span><i className="fa fa-flag"></i> Find adverts</span>
          </div>
        </div>
        <div className="search-form">
          <form className="trips" action="#">
            <div className="form-item">
              <input type="text" className="bordered-input" placeholder="Where do you want to travel..."/>
            </div>
            <div className="form-action">
              <input type="submit" className="btn btn-green" value="Search"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}