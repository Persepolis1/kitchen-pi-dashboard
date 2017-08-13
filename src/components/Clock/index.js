import "./Clock.styl";
import React,{Component} from "react";
import {getDayToString , getMonthToString} from "../../helpers/util";

export default class Clock extends Component{
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
      <div className="clock-container">
        <div className="clock-date">
          <h1>{getDayToString(this.state.date.getDay())}, {getMonthToString(this.state.date.getMonth())} {this.state.date.getDate()}</h1>
        </div>
        <div className="clock-time" >
          <i className="fa fa-clock-o"></i>
          <h1>{this.state.date.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true })}</h1>
        </div>
      </div>
    );
  }
}