import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { scrollPosts } from '../actions/postActions';

import Posts from './Posts';

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
    const newPage = this.state.page + 1;
    this.setState({page: newPage});
    this.props.scrollPosts(newPage);
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
