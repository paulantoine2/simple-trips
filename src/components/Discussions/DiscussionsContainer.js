import React from 'react';
import Comment from "./Comment";
import CommentBox from "./CommentBox";
import { graphql, gql } from 'react-apollo'


class DiscussionsContainer extends React.Component{

  render() {
    if (this.props.allCommentsQuery && this.props.allCommentsQuery.loading) {
      return <div>Loading</div>
    }

    if (this.props.allCommentsQuery && this.props.allCommentsQuery.error) {
      console.log(this.props.allCommentsQuery.error);
      return <div>Error</div>
    }

    const comments = this.props.allCommentsQuery.allComments
    return (
      <div id="discussions">
        <h2 className="small">Discussions</h2>
        <div className="inside">
          {comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
        </div>
        <CommentBox/>
      </div>
    );
  }
}


const ALL_LINKS_QUERY = gql`query AllCommentsQuery($parent: CommentFilter) {
        allComments(filter: { parent: $parent }) {
            id
            likes
            author {
                username
                avatar
            }
            createdAt
            message
            replies {
                id
                likes
                author {
                    username
                    avatar
                }
                createdAt
                message
            }
        }
    }
`;


export default graphql(ALL_LINKS_QUERY, { name: 'allCommentsQuery', options: { variables: { parent: null}} }) (DiscussionsContainer);