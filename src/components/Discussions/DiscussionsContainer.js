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
          {comments.map((comment, index) => <Comment key={index} comment={comment} refetch={this.props.allCommentsQuery.refetch}/>)}
        </div>
        <CommentBox refetch={this.props.allCommentsQuery.refetch}/>
      </div>
    );
  }
}


const ALL_LINKS_QUERY = gql`
    query AllCommentsQuery($parent: CommentFilter, $advertId: AdvertFilter) {
        allComments(filter: { parent: $parent, appearsInAdvert: $advertId }) {
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


export default graphql(ALL_LINKS_QUERY, {
  name: 'allCommentsQuery',
  options: ({ contentId }) => ({
    variables: {
      parent: null,
      advertId: {
        id: contentId
      }
    },
  }),
}) (DiscussionsContainer);