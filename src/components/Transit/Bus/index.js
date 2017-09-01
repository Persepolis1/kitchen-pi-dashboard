import "./bus.styl";
import React,{Component} from "react";
import Transit from "../index";
import Box from "../../Box/index";

export default class Bus extends Component{
  render(){
    return(
      <Box title={"A-40 Express"} icon={"bus"}>
        <p>Vaudreuil</p>
        <Transit location={"vaudreuil"} type={"bus"}/>
        <p>Cote-Vertu</p>
        <Transit location={"coteVertu"} type={"bus"}/>
      </Box>
    );
  };
}