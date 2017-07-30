import React, { Component } from 'react';
import "./theme.styl";
import Clock from "./Clock/index";

export default class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Clock/>
      </div>
    );
  }
}