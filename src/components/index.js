import React, { Component } from 'react';
import "./theme.styl";
import Clock from "./Clock/index";
import Weather from "./Weather/index";
import Bus from "./Transit/Bus/index";
import Train from "./Transit/Train/index";
import TrafficMap from "./TrafficMap/index";
import DrivingTime from "./DrivingTime/index";

export default class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Clock/>
        <Weather/>
        <Bus/>
        <Train/>
        <DrivingTime/>
        <TrafficMap/>
      </div>
    );
  }
}