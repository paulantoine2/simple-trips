import React from 'react';
import { Link } from 'react-router';
import ArticleTeaserList from "../Article/ArticleTeaserList";
import AdvertTeaserList from "./AdvertTeaserList";
import DiscussionsContainer from "../Discussions/DiscussionsContainer";

export default class AdvertPage extends React.Component{
  render() {
    return (
      <main className="advert">
        <div id="landing-top" className="top">
          <div className="inside wrapper wide">
            <div className="left-bottom">
              <h1>East Coast Dream</h1>
              <div className="countries">
                <Link to="/" className="country-tag">Australia</Link>
                <Link to="/" className="country-tag">New Zealand</Link>
              </div>
            </div>
            <div className="right-bottom">
              345 Views
            </div>
          </div>
        </div>
        <div className="with-aside inside wrapper wide">
          <aside>
            <div className="top">
              <div className="left">
                <div className="user-thumbnail">
                  <img src="images/portrait1.jpg" alt=""/>
                </div>
                <div className="user-name">
                  <div className="sub-title">Advert by</div>
                  <span>Corey Grey</span>
                </div>
              </div>
              <div className="right">
                <div className="people">
                  <div className="people-icon active"></div>
                  <div className="people-icon active"></div>
                  <div className="people-icon"></div>
                </div>
                <div className="date">
                  <span>September 2016</span>
                </div>
              </div>
            </div>
            <div className="message">
              <p>Are you interested in this Advert ?</p>
              <Link to="/" className="btn btn-green">Send a message</Link>
            </div>
            <div className="map">

            </div>
            <div className="trip-details details">
              <div>
                <div className="sub-title">
                  Distance
                </div>
                <span>2634 km</span>
              </div>
              <div>
                <div className="sub-title">
                  Trip Duration
                </div>
                <span>18 days</span>
              </div>
              <div>
                <div className="sub-title">
                  Budget
                </div>
                <span>2000 AUD</span>
              </div>
            </div>
          </aside>
          <div id="presentation">
            <h2 className="small">Presentation</h2>
            <p>Get prepared.</p>
            <p>I focus a lot on helping the first time or inexperienced traveler head out prepared and confident in themselves. Starting out as a old traveler can be intimidating. How do you jump into the gigantic travel fray and survive? How can you learn to love delays and long lines?</p>
            <p>What exactly does that mean? It means being confident in what you are doing, where you are going and how you are getting there. basically, it means being comfortable with yourself when you leave home.</p>
          </div>
          <div id="itinerary">
            <h2 className="small">Itinerary</h2>
            <div className="step">
              <div className="main">
                <div className="thumbnail">
                  <img src="images/step.png" alt=""/>
                </div>
                <div className="step-details">
                  <div className="sub-title">Step 1</div>
                  <span>Fraser Island, QLD</span>
                  <div className="sub-title">Approximatly time</div>
                  <span>2 Days</span>
                </div>
              </div>
            </div>
            <div className="step active">
              <div className="main">
                <div className="thumbnail">
                  <img src="images/step.png" alt=""/>
                </div>
                <div className="step-details">
                  <div className="sub-title">Step 1</div>
                  <span>Fraser Island, QLD</span>
                  <div className="sub-title">Approximatly time</div>
                  <span>2 Days</span>
                </div>
              </div>
              <div className="sub-steps clearfix">
                <div className="sub-step">
                  <div className="thumbnail">
                    <img src="images/step.png" alt=""/>
                  </div>
                  <div className="step-details">
                    <span>Fraser Island, QLD</span>
                    <div className="sub-title">Approximatly time</div>
                    <span>4 Hours</span>
                  </div>
                </div>
                <div className="sub-step">
                  <div className="thumbnail">
                    <img src="images/step.png" alt=""/>
                  </div>
                  <div className="step-details">
                    <span>Fraser Island, QLD</span>
                    <div className="sub-title">Approximatly time</div>
                    <span>4 Hours</span>
                  </div>
                </div>
                <div className="sub-step">
                  <div className="thumbnail">
                    <img src="images/step.png" alt=""/>
                  </div>
                  <div className="step-details">
                    <span>Fraser Island, QLD</span>
                    <div className="sub-title">Approximatly time</div>
                    <span>4 Hours</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="step">
              <div className="main">
                <div className="thumbnail">
                  <img src="images/step.png" alt=""/>
                </div>
                <div className="step-details">
                  <div className="sub-title">Step 1</div>
                  <span>Fraser Island, QLD</span>
                  <div className="sub-title">Approximatly time</div>
                  <span>2 Days</span>
                </div>
              </div>
            </div>
            <div className="step">
              <div className="main">
                <div className="thumbnail">
                  <img src="images/step.png" alt=""/>
                </div>
                <div className="step-details">
                  <div className="sub-title">Step 1</div>
                  <span>Fraser Island, QLD</span>
                  <div className="sub-title">Approximatly time</div>
                  <span>2 Days</span>
                </div>
              </div>
            </div>
          </div>
          <div id="budget-estimation">
            <h2 className="small">Budget estimation</h2>
            <div className="total">
              <span>Total</span>
              <span className="value">1289 AUD</span>
            </div>
            <div className="inside clearfix">
              <table>
                <tbody>
                  <tr className="active budget-fuel">
                    <td className="icon"><i className="fa fa-road"></i></td>
                    <td className="label">Fuel</td>
                    <td className="value"><div>456 AUD</div></td>
                  </tr>
                  <tr className="budget-activites">
                    <td className="icon"><i className="fa fa-bolt"></i></td>
                    <td className="label">Activities</td>
                    <td className="value"><div>456 AUD</div></td>
                  </tr>
                  <tr className="budget-rental">
                    <td className="icon"><i className="fa fa-car"></i></td>
                    <td className="label">Rental</td>
                    <td className="value"><div>456 AUD</div></td>
                  </tr>
                  <tr className="budget-food">
                    <td className="icon"><i className="fa fa-cutlery"></i></td>
                    <td className="label">Food</td>
                    <td className="value"><div>456 AUD</div></td>
                  </tr>
                  <tr className="budget-accommodations">
                    <td className="icon"><i className="fa fa-bed"></i></td>
                    <td className="label">Accommodations</td>
                    <td className="value"><div>456 AUD</div></td>
                  </tr>
                </tbody>
              </table>
              <table className="active-data">
                <tbody>
                  <tr>
                    <td>Average price of petrol / km</td>
                    <td className="value">0.3 AUD</td>
                  </tr>
                  <tr>
                    <td>Total distance</td>
                    <td className="value">3865 kms</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="message">
              Every amount is an estimation. Keep in mind they are average values and they can vary depending on the season and on other variables.
            </p>
          </div>
          <DiscussionsContainer/>
        </div>
        <div id="similar-content">
          <div className="inside wrapper cols wide">
            <ArticleTeaserList title="Similar Articles" className="col-2 left"/>
            <AdvertTeaserList title="Similar Adverts" className="col-2 right"/>
          </div>
        </div>
      </main>
    );
  }
}