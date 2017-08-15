import React from 'react';
import { Link } from 'react-router';
import AdvertTeaser from "./AdvertTeaser";

// TODO
const adverts = ['','',''];

export default class AdvertTeaserList extends React.Component{

  render() {
    return (
      <div className={`advert-teaser-list ${ this.props.className }`}>
        <h2 className="small">{ this.props.title }</h2>
        <ul className="items teaser-list">
          <li>
            {adverts.map((article, index) => <AdvertTeaser key={index}/>)}
          </li>
        </ul>
        <Link to={`/adverts`} className="link see-more">
          See all adverts
        </Link>
      </div>
    );
  }
}