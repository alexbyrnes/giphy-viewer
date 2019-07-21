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

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillMount(){
    this.props.scrollPosts(this.state.page);
  }

  onScroll(e) {
    // Is scrollbar at the bottom?
    // If so, load more images
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      const newPage = this.state.page + 1;
      this.setState({page: newPage});
      this.props.scrollPosts(newPage, store.getState().posts.query);
    }
  }

  render() {
    return (
      <div onClick={this.onScroll} >
      <Posts />
      </div>
    )
  }
}

Scroller.propTypes = {
  scrollPosts: PropTypes.func.isRequired
}

export default connect(null, { scrollPosts })(Scroller);
