import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';

import store from './Reducers/index';
import CounterAction from './Actions/CounterAction';

import RootNavigation from './rootnavigation';

export default class Dummy2 extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return(
      <Text>asdgasdg22</Text>
    );
  }
}