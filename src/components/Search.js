import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { search } from '../actions/postActions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.query);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Search: </label><br />
          <input type="text" name="query" onChange={this.onChange} value={this.state.query}/>
        <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    )
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired
}

export default connect(null, { search })(Search);
