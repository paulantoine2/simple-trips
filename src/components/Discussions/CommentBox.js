import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { addComment, replyToComment } from '../../actions/index';

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

  handleSubmit(event) {
    event.preventDefault();
    this.setState({content: ''});
    if(this.props.reply){
      this.props.replyToComment(this.props.id, this.state.content);
      this.props.hideReplyBox();
    } else {
      this.props.addComment(this.state.content);
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
    console.log(this.getTrueMessageLength());
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addComment, replyToComment }, dispatch)
}

export default connect(null, mapDispatchToProps)(CommentBox);