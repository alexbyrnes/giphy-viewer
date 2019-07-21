import { FETCH_POSTS, NEW_POST, SCROLL_POSTS } from './types';


const PAGE_SIZE = 5;
let pageToLimitAndOffset = (p) => {
  const offset = p*PAGE_SIZE;
  const limit = PAGE_SIZE;
  return {limit, offset};
};

export const fetchPosts = (page = 0) => dispatch => {
  const {limit, offset} = pageToLimitAndOffset(page);
  const api = `http://api.giphy.com/v1/gifs/trending?api_key=x02biVpdFnk2756xqcf1DYgZYPURZafp&limit=${limit}&offset=${offset}`;
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

export const scrollPosts = (page) => dispatch => {
  dispatch(fetchPosts(page));
  dispatch({
    type: SCROLL_POSTS,
    page: page
  });
};

