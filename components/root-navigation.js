import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import PrayerComponent from "./prayer-component";
import ResultComponent from "./result-component";

export default StackNavigator(
  {
    Home: { screen: PrayerComponent },
    Result: { screen: ResultComponent }
  },
  { headerMode: "none", mode: "modal" }
);
