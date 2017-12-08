import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './Reducers/index';
import CounterAction from './Actions/CounterAction';

import RootNavigation from './rootnavigation';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return(
      <Provider store = {store}>
        <RootNavigation/>
      </Provider>
    );
  }
}


// import {
//   StackNavigator,
// } from 'react-navigation';
// import Dummy from './dummy';
// import Dummy2 from './dummy2';

// export default StackNavigator({
//   Home: { screen: Dummy },
//   Profile: { screen: Dummy2 },
// });