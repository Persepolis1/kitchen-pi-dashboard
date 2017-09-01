import React,{Component} from "react";
import Transit from "../index";
import Box from "../../Box/index";

export default class Train extends Component{
  render(){
    return(
      <Box title={"Vaudreuil-Hudson"} icon={"subway"}>
        <p>Vaudreuil</p>
        <Transit location="vaudreuil" type="train"/>
        <p>Lucien L'Allier</p>
        <Transit location="montreal" type="train"/>
      </Box>
    );
  };
}