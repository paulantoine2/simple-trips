import comments_data from '../data/comments.json';
import { REPLY_COMMENT, ADD_COMMENT } from "../actions/index"

export default function comments(state = comments_data, action) {
  let comments = [];
  switch (action.type) {
    case REPLY_COMMENT:
      return state.map((comment, index) => {
        if(comment.id === action.id){
          return Object.assign({}, comment, {
            replies : [...comment.replies, createComment(action.comment)]
          })
        }
        return comment;
      });
    case ADD_COMMENT:
      comments = [...state, createComment(action.comment)];
      return comments;
    default:
      return state
  }
}

function createComment(message){
  return {
    message,
    likes: 0,
    author: {
      username: "Me me",
      avatar: "http://placehold.it/96x96"
    },
    replies: [],
    date: new Date()
  }
}