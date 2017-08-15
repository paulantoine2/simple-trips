import React from 'react';
import { Link } from 'react-router';
import ArticleTeaser from './ArticleTeaser';

export default class ArticleTeaserList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          "id": 0,
          "thumbnail": "http://placehold.it/144x144",
          "author": {
            "username": "Deloris Dillon"
          },
          "date": "2014-09-28T12:56:15 -02:00",
          "title": "anim deserunt nostrud consequat proident"
        },
        {
          "id": 1,
          "thumbnail": "http://placehold.it/144x144",
          "author": {
            "username": "Dyer Cooper"
          },
          "date": "2015-01-29T01:07:53 -01:00",
          "title": "nisi nisi ut magna ad"
        },
        {
          "id": 2,
          "thumbnail": "http://placehold.it/144x144",
          "author": {
            "username": "Brandie Espinoza"
          },
          "date": "2014-07-28T11:07:34 -02:00",
          "title": "adipisicing mollit commodo proident do"
        },
        {
          "id": 3,
          "thumbnail": "http://placehold.it/144x144",
          "author": {
            "username": "Bessie Wilson"
          },
          "date": "2015-04-25T07:23:32 -02:00",
          "title": "excepteur cupidatat nisi velit nulla"
        },
        {
          "id": 4,
          "thumbnail": "http://placehold.it/144x144",
          "author": {
            "username": "Noelle Vargas"
          },
          "date": "2014-02-01T09:55:45 -01:00",
          "title": "eu nisi est voluptate quis"
        }
      ]
    };
  }
  render() {
    return (
      <div className={`article-teaser-list ${ this.props.className }`}>
        <h2 className="small">{ this.props.title }</h2>
        <ul className="items teaser-list">
          <li>
            {this.state.articles.map(article => <ArticleTeaser key={article.id} article={article}/>)}
          </li>
        </ul>
        <Link to={`/articles`} className="link see-more">
          See all articles
        </Link>
      </div>
    );
  }
}