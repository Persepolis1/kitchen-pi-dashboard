import React, { Component } from 'react';
import "./theme.styl";
import Clock from "./Clock/index";
import Weather from "./Weather/index";
import Bus from "./Bus/index";
import Train from "./Train/index";

export default class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Clock/>
        <Weather/>
        <Bus/>
        <Train/>
      </div>
    );
  }
}