import React,{Component} from "react";
import {getNextTransit} from "../Transit/util";

export default class Transit extends Component{

  getTransitTimes(location,type){
    let transitDates = getNextTransit(location,type);
    if (transitDates.length === 0){
      return(
        <p>No more departures for today</p>
      );
    }
    return transitDates.map((transitDate,index) => {
      return(
        <p key={index} className={"transit-time"}>{transitDate}</p>
      );
    });
  };

  render(){
    return(
      <span>{this.getTransitTimes(this.props.location,this.props.type)}</span>
    );
  };
}