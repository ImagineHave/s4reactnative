import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

import RootNavigation from './components/root-navigation';
import PrayerComponent from './components/prayer-component'

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class App extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return(
      <Provider store = {createStoreWithMiddleware(reducers)}>
        <RootNavigation/>
      </Provider>
    );
  }
}