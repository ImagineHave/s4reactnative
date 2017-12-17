import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise-middleware";

import reducers from "./reducers";

import RootNavigation from "./components/root-navigation";
import PrayerComponent from "./components/prayer-component";

const createStoreWithMiddleware = applyMiddleware(reduxPromise())(createStore);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <RootNavigation />
      </Provider>
    );
  }
}
