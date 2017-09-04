import React,{Component} from "react";
import Transit from "../index";
import Box from "../../Box/index";

export default class Train extends Component{
  render(){
    return(
      <Box title={"Vaudreuil-Hudson - Next 3 Departures"} icon={"subway"} type={"train"}>
        <p>Vaudreuil</p>
        <Transit location="vaudreuil" type="train"/>
        <p>Lucien L'Allier</p>
        <Transit location="montreal" type="train"/>
      </Box>
    );
  };
}