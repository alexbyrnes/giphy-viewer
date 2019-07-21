import { FETCH_POSTS, NEW_POST, SCROLL_POSTS } from '../actions/types';

const initialState = {
  items: [],
  item: {},
  page: 0
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
    };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case SCROLL_POSTS:
      return {
        ...state,
        page: action.page
      };
    default:
      return state;
  
  }
}
