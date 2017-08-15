import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <footer>
        <div className="inside wrapper wide">
          <div className="branding">
            <img src="" alt=""/>
          </div>
          <div className="menu">
            <ul>
              <li>
                <span className="category-title">Community</span>
                <ul>
                  <li><a href="/">Explore Road trips</a></li>
                  <li><a href="/">Explore Adverts</a></li>
                  <li><a href="/">Create a Trip</a></li>
                  <li><a href="/">Sign up</a></li>
                  <li><a href="/">Log in</a></li>
                </ul>
              </li>
              <li>
                <span className="category-title">Travel Content</span>
                <ul>
                  <li><a href="/">Blog</a></li>
                  <li><a href="/">Contribute</a></li>
                  <li><a href="/">Coutries</a></li>
                </ul>
              </li>
              <li>
                <span className="category-title">Website misc</span>
                <ul>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Terms</a></li>
                  <li><a href="/">Support</a></li>
                  <li><a href="/">FAQ</a></li>
                </ul>
              </li>
              <li>
                <span className="category-title">Follow us</span>
                <ul>
                  <li><a href="/">Facebook</a></li>
                  <li><a href="/">Twitter</a></li>
                  <li><a href="/">Instagram</a></li>
                  <li><a href="/">Snapchat</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <span className="title">Newsletter</span>
            <p>Subscribe to our newsletter yo get the latest adverts, trips and articles, customizable.</p>
            <form action="#">
              <div className="form-item">
                <input type="text" className="bordered-input" placeholder="Enter your email address"/>
              </div>
              <div className="form-action">
                <input type="submit" className="btn btn-green" value="Subscribe now"/>
              </div>
            </form>
          </div>
          <div className="copyrights">
            <span>© 2017 Simple Trips All rights reserved</span>
          </div>
        </div>
      </footer>
    );
  }
}