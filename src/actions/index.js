export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const REPLY_COMMENT = 'COMMENT_REPLY';
export const ADD_COMMENT = 'ADD_COMMENT';

export function showModal(modalType, modalProps) {
  return {
    type: SHOW_MODAL,
    modalType,
    modalProps
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  };
}

export function replyToComment(id, comment) {
  return {
    type: REPLY_COMMENT,
    id,
    comment
  }
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}