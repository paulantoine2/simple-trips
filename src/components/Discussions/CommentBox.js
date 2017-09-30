import React from 'react';
import classNames from 'classnames';
import { gql, compose, graphql } from 'react-apollo';
import {GC_USER_ID} from "../../constants";

class CommentBox extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      content: props.toAuthor ? '@' + props.toAuthor.username + ' ' : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      content: nextProps.toAuthor ? '@' + nextProps.toAuthor.username + ' ' : '',
    });
    if(this.props.reply){
      this.nameInput.focus();
    }
  }

  handleChange(event) {
    this.setState({content: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({content: ''});
    if(this.props.reply){
      const newComment = await this.props.addComment({
        variables: {
          message: this.state.content,
          author: localStorage.getItem(GC_USER_ID),
        }});
      await this.props.replyToComment({
        variables: {
          parent: this.props.id,
          reply: newComment.data.createComment.id
        }});
      this.props.refetch();
      this.props.hideReplyBox();
    } else {
      await this.props.addComment({
        variables: {
          message: this.state.content,
          author: localStorage.getItem(GC_USER_ID)
        }});
      this.props.refetch();
    }
  }

  componentDidMount(){
    if(this.props.reply){
      this.nameInput.focus();
    }
  }

  getTrueMessageLength(){
    if(this.props.toAuthor && this.state.content.search('@' + this.props.toAuthor.username) === 0){
      return (this.state.content.length - this.props.toAuthor.username.length - 2);
    } else {
      return this.state.content.length
    }
  }

  render() {
    const placeholder = this.props.reply ? 'Write a reply...' : 'Join the discussion...';
    const btn_classes = classNames('btn', 'btn-green', { 'disabled' : this.getTrueMessageLength() < 2 });
    return (
      <form className="comment-box clearfix" onSubmit={this.handleSubmit}>
        <div className="author">
          <div className="user-thumbnail">
            <img src="http://placehold.it/96x96" alt=""/>
          </div>
        </div>
        <textarea className="message-box" value={this.state.content} onChange={this.handleChange} ref={(input) => { this.nameInput = input; }}  placeholder={placeholder}/>
        <input className={btn_classes} type="submit" value="Send" />
      </form>
    );
  }
}

const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentMutation($message: String!, $author: ID!) {
      createComment(
          message: $message,
          likes: 0,
          authorId: $author,
      ) {
          id
          createdAt
          message
          author {
              username
              avatar
          }
      }
  }
`;

const ADD_REPLY_TO_COMMENT_MUTATION = gql`
  mutation AddReplyToCommentMutation($parent: ID!, $reply: ID!) {
      addToCommentReply(
          repliesCommentId: $reply,
          parentCommentId: $parent
      ) {
          repliesComment{
              id
          }
      }
  }
`;

export default compose(
  graphql(CREATE_COMMENT_MUTATION, { name: 'addComment' }),
  graphql(ADD_REPLY_TO_COMMENT_MUTATION, { name: 'replyToComment' })
)(CommentBox);