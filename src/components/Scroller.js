import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { scrollPosts } from '../actions/postActions';

import Posts from './Posts';
import store from '../store';

class Scroller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0
    };

    this.onScroll = this.onScroll.bind(this);
  }

  componentWillMount(){
    this.props.scrollPosts(this.state.page);
  }

  onScroll(e) {
    /* TODO: conflicts with viewer
    const newPage = this.state.page + 1;
    this.setState({page: newPage});
    this.props.scrollPosts(newPage, store.getState().posts.query);
    */
  }

  render() {
    return (
      <div onClick={this.onScroll} >
      <h1>scroll</h1>
      <Posts />
      </div>
    )
  }
}

Scroller.propTypes = {
  scrollPosts: PropTypes.func.isRequired
}

export default connect(null, { scrollPosts })(Scroller);
