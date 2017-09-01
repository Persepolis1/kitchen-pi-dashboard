import React,{Component} from "react";
import Box from "../Box/index";

export default class Traffic extends Component{
  render(){
    return(
      <Box title={"Travel Times"} icon={"car"} type={"traffic"}>
        <p>Travel times go here</p>
      </Box>
    );
  }
}