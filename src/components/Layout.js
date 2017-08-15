import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ModalRoot from './Modals/ModalRoot';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header/>
        <div className="app-content">{this.props.children}</div>
        <Footer/>
        <ModalRoot />
      </div>
    );
  }
}