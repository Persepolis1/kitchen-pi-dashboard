import React, { Component } from 'react';
import "../constants/theme.styl";
import {getDayToString , getMonthToString} from "../helpers/util";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>The current date is {getDayToString(this.state.date.getDay())}</h2>
        <h2>The current month is {getMonthToString(this.state.date.getMonth())}</h2>
        <h2>The current year is : {this.state.date.getFullYear()}</h2>
      </div>
    );
  }
}