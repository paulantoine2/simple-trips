import React from 'react';
import ArticleTeaserList from "./Article/ArticleTeaserList";
import AdvertTeaserList from "./Advert/AdvertTeaserList";
import HomeSearchBox from "./Home/HomeSearchBox";

export default class IndexPage extends React.Component {
  render() {
    return (
      <main className="home">
        <div id="landing-top">
          <div className="inside wrapper wide">
            <div className="content">
              <h1>Road trips, made simples</h1>
              <HomeSearchBox/>
            </div>
            <div className="background-legend">
              <div className="top"><span>Arthur Pass, New Zealand</span></div>
              <div className="bottom"><span>13 Trips, 25 Adverts in New Zealand</span><a href="/" className="link see-more">Explore New Zealand</a></div>
            </div>
          </div>
        </div>
        <div id="travel-selections">
          <div className="inside wrapper wide">
            <h2>Travel selections</h2>
            <div className="selections-menu">
              <ul className="menu">
                <li>Australia</li>
                <li>New Zealand</li>
                <li>China</li>
                <li>USA</li>
              </ul>
            </div>
            <div className="items clearfix">
              <div className="featured road-trip big">
                <div className="background">
                  <img src="images/featured1.jpg" alt=""/>
                </div>
                <div className="content">
                  <div className="rating">
                    <div className="rating-star"></div>
                    <div className="rating-star"></div>
                    <div className="rating-star"></div>
                    <div className="rating-star"></div>
                    <div className="rating-star"></div>
                  </div>
                  <div className="title">
                    <h3>East coast dream</h3>
                  </div>
                  <div className="countries">
                    <a href="/" className="country-tag">Australia</a>
                    <a href="/" className="country-tag">New Zealand</a>
                  </div>
                  <div className="link">
                    <a href="/" className="link see-more">Read more</a>
                  </div>
                </div>
              </div>
              <div className="featured road-trip small">
                <div className="background">
                  <img src="images/featured2.jpg" alt=""/>
                </div>
                <div className="content">
                  <div className="rating">
                    <div className="rating-star"></div>
                    <div className="rating-star"></div>
                    <div className="rating-star"></div>
                    <div className="rating-star"></div>
                  </div>
                  <div className="title">
                    <h3>East coast dream</h3>
                  </div>
                  <div className="countries">
                    <a href="/" className="country-tag">Australia</a>
                    <a href="/" className="country-tag">New Zealand</a>
                  </div>
                  <div className="link">
                    <a href="/" className="link see-more">Read more</a>
                  </div>
                </div>
              </div>
              <div className="featured article small">
                <div className="background">
                  <img src="images/featured3.jpg" alt=""/>
                </div>
                <div className="content">
                  <div className="title">
                    <h3>East coast dream</h3>
                  </div>
                  <div className="details">
                    <div className="author">Corey Willis</div>
                    <div className="date">11 Oct 1017</div>
                  </div>
                  <div className="link">
                    <a href="/" className="link see-more">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="recent-content">
          <div className="inside wrapper cols wide">
            <ArticleTeaserList title="Recent Articles" className="col-2 left"/>
            <AdvertTeaserList title="Recent Adverts" className="col-2 right"/>
          </div>
        </div>
        <div id="build-your-trip">
          <div className="inside wrapper wide">
            <h2>Build your dream trip</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid commodi consectetur cupiditate, doloribus esse exercitationem fugit hic, id in labore molestias nulla perferendis provident quidem sint unde vero voluptatibus?</p>
            <div className="cards">
              <div className="card define-your-route">
                <div className="inside">
                  <h3>Define your route</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at commodi tempore? Adipisci, amet animi cupiditate deserunt dolor doloribus ducimus facilis illo laboriosam</p>
                </div>
              </div>
              <div className="card manage-your-budget">
                <div className="inside">
                  <h3>Manage your budget</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at commodi tempore? Adipisci, amet animi cupiditate deserunt dolor doloribus ducimus facilis illo laboriosam</p>
                </div>
              </div>
              <div className="card find-places">
                <div className="inside">
                  <h3>Find places to stay</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at commodi tempore? Adipisci, amet animi cupiditate deserunt dolor doloribus ducimus facilis illo laboriosam</p>
                </div>
              </div>
              <div className="card discover-spots">
                <div className="inside">
                  <h3>Discover best spots</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at commodi tempore? Adipisci, amet animi cupiditate deserunt dolor doloribus ducimus facilis illo laboriosam</p>
                </div>
              </div>
            </div>
            <a href="/" className="btn btn-green">Build your trip now</a>
          </div>
        </div>
        <div id="meet-travel-mates">
          <div className="inside">
            <h2>Meet travel mates</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias atque culpa, deleniti dolor, dolore exercitationem explicabo in, ipsum maxime odit perferendis possimus quod quos sint tempora vel voluptatem.</p>
            <div className="slider">
              <div className="control-left"></div>
              <div className="control-right"></div>
              <div className="cards">
                <div className="card">
                  <div className="user-thumbnail">
                    <img src="images/portrait1.jpg" alt=""/>
                  </div>
                  <div className="user-name">
                    <span>Cameron Lewis</span>
                  </div>
                  <p>Ex id impedit magnam maiores nam provident quis repellendus rerum</p>
                  <div className="countries">
                    <span className="country-tag">Laos</span>
                    <span className="country-tag">Cambodia</span>
                    <span className="country-tag">Vietnam</span>
                  </div>
                  <div className="date">
                    <span>December 2017</span>
                  </div>
                </div>
                <div className="card">
                  <div className="user-thumbnail">
                    <img src="images/portrait1.jpg" alt=""/>
                  </div>
                  <div className="user-name">
                    <span>Cameron Lewis</span>
                  </div>
                  <p>Ex id impedit magnam maiores nam provident quis repellendus rerum</p>
                  <div className="countries">
                    <span className="country-tag">Laos</span>
                    <span className="country-tag">Cambodia</span>
                    <span className="country-tag">Vietnam</span>
                  </div>
                  <div className="date">
                    <span>December 2017</span>
                  </div>
                </div>
                <div className="card active">
                  <div className="user-thumbnail">
                    <img src="images/portrait1.jpg" alt=""/>
                  </div>
                  <div className="user-name">
                    <span>Bessie Maxwell</span>
                  </div>
                  <p>Ex id impedit magnam maiores nam provident quis repellendus rerum</p>
                  <div className="countries">
                    <span className="country-tag">Bolivia</span>
                    <span className="country-tag">Chile</span>
                  </div>
                  <div className="date">
                    <span>December 2017</span>
                  </div>
                </div>
                <div className="card">
                  <div className="user-thumbnail">
                    <img src="images/portrait1.jpg" alt=""/>
                  </div>
                  <div className="user-name">
                    <span>Jennie Wilson</span>
                  </div>
                  <p>Ex id impedit magnam maiores nam provident quis repellendus rerum</p>
                  <div className="countries">
                    <span className="country-tag">New Zealand</span>
                  </div>
                  <div className="date">
                    <span>December 2017</span>
                  </div>
                </div>
                <div className="card">
                  <div className="user-thumbnail">
                    <img src="images/portrait1.jpg" alt=""/>
                  </div>
                  <div className="user-name">
                    <span>Cameron Lewis</span>
                  </div>
                  <p>Ex id impedit magnam maiores nam provident quis repellendus rerum</p>
                  <div className="countries">
                    <span className="country-tag">Laos</span>
                    <span className="country-tag">Cambodia</span>
                    <span className="country-tag">Vietnam</span>
                  </div>
                  <div className="date">
                    <span>December 2017</span>
                  </div>
                </div>
              </div>
            </div>
            <a href="/" className="link see-more">See all adverts</a>
          </div>
        </div>
        <div id="explore">
          <div className="inside">
            <h2>Explore & Live the Adventure</h2>
            <img src="images/worldLow.svg" alt=""/>
          </div>
        </div>
      </main>
    );
  }
}