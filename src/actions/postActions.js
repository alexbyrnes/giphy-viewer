import { FETCH_POSTS, NEW_POST, SCROLL_POSTS, SEARCH } from './types';


const PAGE_SIZE = 10;
let pageToLimitAndOffset = (p) => {
  const offset = p*PAGE_SIZE;
  const limit = p*PAGE_SIZE;
  return {limit, offset};
};

export const fetchPosts = (page = 0, query = null) => dispatch => {
  const {limit, offset} = pageToLimitAndOffset(page);
  const endpoint = query ? 'search' : 'trending';

  const api = `http://api.giphy.com/v1/gifs/${endpoint}?api_key=x02biVpdFnk2756xqcf1DYgZYPURZafp&limit=${limit}&offset=${offset}&q=${query}`;
  fetch(api)
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts.data
      })
    );
};

export const createPost = (postData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {

    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(post => dispatch({
        type: NEW_POST,
        payload: post
    })
  );

};

export const scrollPosts = (page, query) => dispatch => {
  dispatch(fetchPosts(page, query));
  dispatch({
    type: SCROLL_POSTS,
    page: page
  });
};

export const search = (query) => dispatch => {
  dispatch(fetchPosts(0, query));
  dispatch({
    type: SEARCH,
    query: query,
    page: 0
  });
};

