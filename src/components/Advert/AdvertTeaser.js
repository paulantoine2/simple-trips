import React from 'react';
import { Link } from 'react-router';

export default class AdvertTeaser extends React.Component{
  render() {
    return (
      <Link href="/" className="teaser road-trip">
        <div className="thumbnail">
          <img src="images/featured2.jpg" alt=""/>
        </div>
        <div className="content">
          <div className="title">
            <h3>East coast dream</h3>
          </div>
          <div className="countries">
            <span className="country-tag">Argentina</span>
            <span className="country-tag">Chile</span>
            <span className="country-tag">Bolivia</span>
          </div>
          <div className="author">
            <div className="user-thumbnail">
              <img src="images/portrait1.jpg" alt=""/>
            </div>
            <div className="user-name">
              <span>Rosetta Butler</span>
            </div>
          </div>
          <div className="details">
            <div className="people">
              <div className="toolip">
                <div className="content">
                  1 Person need, 3 Person total
                </div>
              </div>
              <div className="sub-title">People</div>
              <span>
                <div className="people-icon"></div>
                <div className="people-icon"></div>
                <div className="people-icon needed"></div>
              </span>
            </div>
            <div className="departure">
              <div className="sub-title">Departure</div>
              <span>September 2017</span>
            </div>
            <div className="budget">
              <div className="sub-title">Budget</div>
              <span className="currency-value">2000 AUD</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}