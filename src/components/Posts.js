import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postActions'

import Viewer from './Viewer'
import store from '../store'

class Posts extends Component {
  componentWillReceiveProps (nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render () {
    const currentQuery = store.getState().posts.query
    const isSearch = currentQuery !== null
    const results = isSearch ? <h1>Results: {currentQuery}</h1> : <h1>Trending</h1>

    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <Viewer
          image={post.images.fixed_height.url}
          title={post.title}
        />
      </div>
    ))

    return (
      <div>
        {results}
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item

})
export default connect(mapStateToProps, { fetchPosts })(Posts)
