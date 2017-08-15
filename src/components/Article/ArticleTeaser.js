import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

export default class ArticleTeaser extends React.Component{
  render() {
    const date = moment(this.props.article.date, 'YYYY-MM-DD').format('DD MMM YYYY');
    return (
      <Link to={`/article/${this.props.article.id}`} className="article teaser">
        <div className="thumbnail">
          <img src={this.props.article.thumbnail} alt=""/>
        </div>
        <div className="content">
          <div className="title">
            <h3>{this.props.article.title}</h3>
          </div>
          <div className="details">
            <div className="author">{this.props.article.author.username}</div>
            <div className="date">{date}</div>
          </div>
        </div>
      </Link>
    );
  }
}