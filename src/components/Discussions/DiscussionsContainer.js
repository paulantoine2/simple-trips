import React from 'react';
import Comment from "./Comment";
import CommentBox from "./CommentBox";
import { connect } from 'react-redux';


class DiscussionsContainer extends React.Component{

  render() {
    return (
      <div id="discussions">
        <h2 className="small">Discussions</h2>
        <div className="inside">
          {this.props.comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
        </div>
        <CommentBox/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps, null)(DiscussionsContainer);