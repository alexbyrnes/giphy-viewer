import { FETCH_POSTS, SCROLL_POSTS, SEARCH } from '../actions/types'

const initialState = {
  items: [],
  item: {},
  query: null,
  page: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
    case SCROLL_POSTS:
      return {
        ...state,
        page: action.page
      }
    case SEARCH:
      return {
        ...state,
        query: action.query,
        page: action.page
      }
    default:
      return state
  }
}
