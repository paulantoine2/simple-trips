import { combineReducers } from 'redux';
import modal from './modal_reducer';
import comments from './comment_reducer';

export const rootReducer = combineReducers({
  modal,
  comments
});
