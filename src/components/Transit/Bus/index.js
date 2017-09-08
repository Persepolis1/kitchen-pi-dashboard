import "./bus.styl";
import React,{Component} from "react";
import Transit from "../index";
import Box from "../../Box/index";

export default class Bus extends Component{
  render(){
    return(
      <Box title={"A-40 Express - Next 3"} icon={"bus"} type={"bus"}>
        <p className={"transit-title"}>Vaudreuil</p>
        <Transit location={"vaudreuil"} type={"bus"}/>
        <p className={"transit-title"}>Cote-Vertu</p>
        <Transit location={"coteVertu"} type={"bus"}/>
      </Box>
    );
  };
}