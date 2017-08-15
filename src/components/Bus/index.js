import "./bus.styl";
import React,{Component} from "react";
import {getBusWeekdayTimes, getBusWeekendTimes} from "../../helpers/util";

export default class Bus extends Component{

  getBusTimes(location){
    let day = new Date().getDay();
    (day === (0 || 6)) ? getBusWeekendTimes(location,day) : getBusWeekdayTimes(location);
  }
  render(){
    return(
      <div className="bus-container">
        <div className="bus-title"></div>
        <div className="bus-time bus-first">
          <h1>{this.getBusTimes('vaudreuil')}</h1>
        </div>
        <div className="bus-time bus-second"></div>
      </div>
    );
  };
}