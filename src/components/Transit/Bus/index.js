import "./bus.styl";
import React,{Component} from "react";
import Transit from "../index";

export default class Bus extends Component{
  render(){
    return(
      <div className="bus-container">
        <div className="bus-title"></div>
        <div className="bus-time bus-first">
          <h1>Vaudreuil</h1>
          <Transit location="vaudreuil" type="bus"/>
        </div>
        <div className="bus-time bus-second">
          <h1>Cote Vertu</h1>
          <Transit location="coteVertu" type="bus"/>
        </div>
      </div>
    );
  };
}