import "./bus.styl";
import React,{Component} from "react";
import {getNextBuses} from "../../helpers/util";

export default class Bus extends Component{

  //To be optimized
  getBusTimes(location){
    let busDates = getNextBuses(location);
    return busDates.map((busDates,index) => {
      return(
        <h1 key={index}>{busDates}</h1>
      );
    });
  }

  render(){
    return(
      <div className="bus-container">
        <div className="bus-title"></div>
        <div className="bus-time bus-first">
          {this.getBusTimes('vaudreuil')}
        </div>
        <div className="bus-time bus-second">
          <h1>{this.getBusTimes('coteVertu')}</h1>
        </div>
      </div>
    );
  };
}