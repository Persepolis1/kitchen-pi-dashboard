import "./bus.styl";
import React,{Component} from "react";
import {getNextBuses} from "./util";

export default class Bus extends Component{

  //To be optimized
  getBusTimes(location){
    let busDates = getNextBuses(location);
    if (busDates.length === 0){
      return(
        <h1>There are no more buses schedule to leave today</h1>
      );
    }
    return busDates.map((busDate,index) => {
      return(
        <h1 key={index}>{busDate}</h1>
      );
    });
  }

  render(){
    return(
      <div className="bus-container">
        <div className="bus-title"></div>
        <div className="bus-time bus-first">
          <h1>Vaudreuil</h1>
          {this.getBusTimes('vaudreuil')}
        </div>
        <div className="bus-time bus-second">
          <h1>Cote Vertu</h1>
          {this.getBusTimes('coteVertu')}
        </div>
      </div>
    );
  };
}