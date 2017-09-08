import React,{Component} from "react";
import Transit from "../index";
import Box from "../../Box/index";

export default class Train extends Component{
  render(){
    return(
      <Box title={"Vaudreuil-Hudson - Next 3"} icon={"subway"} type={"train"}>
        <p className={"transit-title"}>Vaudreuil</p>
        <Transit location="vaudreuil" type="train"/>
        <p className={"transit-title"}>Lucien-L'Allier</p>
        <Transit location="montreal" type="train"/>
      </Box>
    );
  };
}