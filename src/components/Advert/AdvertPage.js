import React from 'react';
import { Link } from 'react-router';
import { gql, graphql } from 'react-apollo';
import ArticleTeaserList from "../Article/ArticleTeaserList";
import AdvertTeaserList from "./AdvertTeaserList";
import DiscussionsContainer from "../Discussions/DiscussionsContainer";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AdvertPage extends React.Component{

  constructor(props){
    super(props);

  }
  render() {
    const { data } = this.props;
    let content;
    if (data && data.loading) {
      content = null;
    } else if (data && data.error) {
      console.error(this.props.data.error);
      content = <div>Error</div>;
    } else {
      const advert = data.Advert;

      // const landingTop = {
      //   backgroundImage: `url('${advert.landingImage}')`
      // };
      const landingTop = {
        backgroundImage: `url('../public/advert/landing/${advert.landingImage}')`
      };
      content = (
        <div>
            <div id="landing-top" style={landingTop} className="top">
              <div className="inside wrapper wide">
                <div className="left-bottom">
                  <h1>East Coast Dream</h1>
                  <div className="countries">
                    <Link to="/" className="country-tag">Australia</Link>
                    <Link to="/" className="country-tag">New Zealand</Link>
                  </div>
                </div>
                <div className="right-bottom">
                  {advert.views} Views
                </div>
              </div>
            </div>
          <div className="with-aside inside wrapper wide">
            <aside>
              <div className="top">
                <div className="left">
                  <div className="user-thumbnail">
                    <img src={advert.author.avatar} alt=""/>
                  </div>
                  <div className="user-name">
                    <div className="sub-title">Advert by</div>
                    <span>{advert.author.username}</span>
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
              <div dangerouslySetInnerHTML={{__html: advert.presentation}}></div>
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
                    <td className="value">
                      <div>456 AUD</div>
                    </td>
                  </tr>
                  <tr className="budget-activites">
                    <td className="icon"><i className="fa fa-bolt"></i></td>
                    <td className="label">Activities</td>
                    <td className="value">
                      <div>456 AUD</div>
                    </td>
                  </tr>
                  <tr className="budget-rental">
                    <td className="icon"><i className="fa fa-car"></i></td>
                    <td className="label">Rental</td>
                    <td className="value">
                      <div>456 AUD</div>
                    </td>
                  </tr>
                  <tr className="budget-food">
                    <td className="icon"><i className="fa fa-cutlery"></i></td>
                    <td className="label">Food</td>
                    <td className="value">
                      <div>456 AUD</div>
                    </td>
                  </tr>
                  <tr className="budget-accommodations">
                    <td className="icon"><i className="fa fa-bed"></i></td>
                    <td className="label">Accommodations</td>
                    <td className="value">
                      <div>456 AUD</div>
                    </td>
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
                Every amount is an estimation. Keep in mind they are average values and they can vary depending on the
                season and on other variables.
              </p>
            </div>
            <DiscussionsContainer contentId={this.props.params.advertId}/>
          </div>
          <div id="similar-content">
            <div className="inside wrapper cols wide">
              <ArticleTeaserList title="Similar Articles" className="col-2 left"/>
              <AdvertTeaserList title="Similar Adverts" className="col-2 right"/>
            </div>
          </div>
        </div>
      );
    }
    return (
      <main className="advert">
        <ReactCSSTransitionGroup
          transitionName="modal"
          transitionEnterTimeout={3000}>
          {content}
        </ReactCSSTransitionGroup>
      </main>
    );
  }
}

const FULL_ADVERT_QUERY = gql`
  query FullAdvertQuery($id: ID!) {
      Advert(id: $id){
          id
          title
          landingImage
          presentation
          author {
              username
              avatar
          }
          views
          peopleTotal
          peopleActive
      }
  }
`;

export default graphql(FULL_ADVERT_QUERY, {
  options: ({ params }) => ({
    variables: { id: params.advertId },
  }),
})(AdvertPage);