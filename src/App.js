import React, { Component } from 'react';

import './App.css';
import { Provider } from 'react-redux';

import Scroller from './components/Scroller';
import Search from './components/Search';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Search />
          <hr />
          <Scroller />
        </div>
      </Provider>
    );
  }
}

export default App;
