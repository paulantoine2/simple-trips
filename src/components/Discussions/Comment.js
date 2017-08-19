import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal } from '../../actions/index';
import CommentBox from "./CommentBox";

class Comment extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      liked_by_user: props.comment.liked_by_user,
      likes: props.comment.likes,
      show_reply_box: false,
      show_replies: false,
      toAuthor: null
    };
    this.hideReplyBox = this.hideReplyBox.bind(this);
    this.showReplyBox = this.showReplyBox.bind(this);
  }

  like() {
    this.setState((prevState) => {
      return {
        liked_by_user: !prevState.liked_by_user,
        likes: prevState.liked_by_user ? prevState.likes - 1 : prevState.likes + 1
      };
    })
  }

  showReplyBox(toAuthor){
    if(this.props.showReplyBox){
      this.props.showReplyBox(toAuthor);
    } else {
      this.showReplies();
      this.setState({
        show_reply_box: true,
        toAuthor
      });
    }
  }

  hideReplyBox(){
    this.setState({ show_reply_box: false });
  }

  showReplies(){
    this.setState({ show_replies: true });
  }

  render() {
    let { comment, showModal } = this.props;

    const thumbs_classes = classNames('thumbs', { 'liked' : this.state.liked_by_user }, { 'active' : this.state.likes > 0});
    const time_ago = moment(comment.createdAt, 'YYYY-MM-DD').fromNow();

    return (
      <div className="comment">
        <div className="author">
          <div className="user-thumbnail">
            <img src={comment.author.avatar} alt=""/>
          </div>
          <div className="user-name">
            <span>{comment.author.username}</span>
            <div className="timestamp sub-title">{time_ago}</div>
          </div>
        </div>
        <div className={thumbs_classes} onClick={() => this.like()}>
          {this.state.likes > 0 &&
            <span>{this.state.likes} </span>
          }
          <i className="fa fa-thumbs-up"></i>
        </div>
        <div className="message">
          <p>
            {comment.message}
          </p>
        </div>
        <div className="actions">
          <span className="reply" onClick={() => this.showReplyBox(comment.author)}><i className="fa fa-reply"></i>Reply</span>
          <span className="signal" onClick={() => showModal('SIGNAL_MODAL', { content: 'comment', id: comment.id })}><i className="fa fa-flag"></i>Signal</span>
          {(comment.replies && comment.replies.length > 0 && !this.state.show_replies) &&
            <div className="link see-more" onClick={() => this.showReplies()}>See replies</div>
          }
        </div>
        {(comment.replies && comment.replies.length > 0 && this.state.show_replies) &&
          <div className="replies">
            {comment.replies.map((reply, index) => <Comment key={index} comment={reply} showModal={showModal} showReplyBox={this.showReplyBox}/>)}
          </div>
        }
        {this.state.show_reply_box &&
          <CommentBox reply="true" id={comment.id} hideReplyBox={this.hideReplyBox} toAuthor={this.state.toAuthor}/>
        }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showModal }, dispatch)
}


export default connect(null, mapDispatchToProps)(Comment);