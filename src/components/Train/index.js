import React,{Component} from "react";
import {getNextBuses} from "../Bus/util";

export default class Train extends Component{
  //To be optimized
  getBusTimes(location){
    let busDates = getNextBuses(location,"train");
    if (busDates.length === 0){
      return(
        <h1>There are no more trains schedule to leave today</h1>
      );
    }
    return busDates.map((busDate,index) => {
      return(
        <h1 key={index}>{busDate}</h1>
      );
    });
  };


  render(){
    return(
      <div>
        <h1>Vaudreuil</h1>
        <div>{this.getBusTimes('vaudreuil')}</div>
        <h1>Lucien L'Allier</h1>
        <div>{this.getBusTimes('montreal')}</div>
      </div>
    );
  };
}