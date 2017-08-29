import React,{Component} from "react";
import Transit from "../index";

export default class Train extends Component{
  render(){
    return(
      <div>
        <h1>Vaudreuil</h1>
        <Transit location="vaudreuil" type="train"/>
        <h1>Lucien L'Allier</h1>
        <Transit location="montreal" type="train"/>
      </div>
    );
  };
}