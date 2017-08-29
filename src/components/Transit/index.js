import React,{Component} from "react";
import {getNextTransit} from "../Transit/util";

export default class Transit extends Component{

  getTransitTimes(location,type){
    let transitDates = getNextTransit(location,type);
    if (transitDates.length === 0){
      return(
        <h1>There are no more {type} schedule to leave today</h1>
      );
    }
    return transitDates.map((transitDate,index) => {
      return(
        <h1 key={index}>{transitDate}</h1>
      );
    });
  };


  render(){
    return(
      <span>{this.getTransitTimes(this.props.location,this.props.type)}</span>
    );
  };
}