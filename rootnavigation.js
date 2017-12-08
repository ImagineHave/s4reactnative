import React, { Component } from 'react';

import CounterAction from './Actions/CounterAction';

import { StackNavigator } from 'react-navigation';
import Result from './result';

// export default class RootNativation extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return(
//         <CounterAction/>
//     );
//   }
// }

export default StackNavigator({
  Home: { screen: CounterAction },
  Result: { screen: Result },
}, { headerMode: 'none' } );