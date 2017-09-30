import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal } from '../actions/index';
import {GC_USER_ID, GC_AUTH_TOKEN} from '../constants';



class Header extends React.Component {

  render() {
    let userId = null;
    if(typeof localStorage !== 'undefined'){
      userId = localStorage.getItem(GC_USER_ID);
    }
    let nav = (
      <div className="left">
        <div className="branding">
          <Link to="/">
            <img src="../static/images/logo.svg" alt=""/>
          </Link>
        </div>
        <div className="header-menu">
          <ul className="menu menu-inline">
            <li>
              <Link to="/">Road Trips</Link>
            </li>
            <li>
              <Link to="/advert">Adverts</Link>
            </li>
            <li>
              <Link to="/">Explore</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    );
    let settings = (
      <div className="user-menu">
        <div className="burger-menu">Settings</div>
        <div className="settings-modal hidden"></div>
      </div>
    );
    let userMenu;
    if(userId) {
      userMenu = (
        <div className="right">
          <div className="user-account">
            <div className="user-thumbnail">
              <img src="images/portrait1.jpg" alt=""/>
            </div>
            <div className="user-name">
              <span>Paul.A</span>
            </div>
          </div>
          <div className="user-notifications">
            <div className="bell"></div>
            <div className="user-notification-modal hidden"></div>
          </div>
          <div className="create-your-trip">
            <a href="/">Create your trip</a>
          </div>
          <div>
            <div onClick={() => {
              localStorage.removeItem(GC_USER_ID);
              localStorage.removeItem(GC_AUTH_TOKEN);
              window.location.reload();
            }}>Logout</div>
          </div>
          {settings}
        </div>
      );
    } else {
      userMenu = (
        <div className="right">
          <div>
            <span onClick={() => this.props.showModal('LOG_IN_MODAL')}>Log in</span>
          </div>
          <div>
            <div onClick={() => this.props.showModal('SIGN_UP_MODAL')} className="btn btn-green">Sign up</div>
          </div>
          {settings}
        </div>
      );
    }

    return (
      <header className="floating-hover">
        <div className="inside clearfix">
          {nav}
          {userMenu}
        </div>
      </header>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showModal }, dispatch)
}

export default connect(null, mapDispatchToProps)(Header);