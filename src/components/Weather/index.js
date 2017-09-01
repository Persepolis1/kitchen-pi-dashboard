import "./Weather.styl";
import React,{Component} from "react";
import Box from "../Box/index";
export default class Weather extends Component{
  constructor(props){
    super(props);
    this.state = {weather : {}};
  }

  componentDidMount(){
  }
  render(){
    return(
      <Box title={'Weather'} icon={'cloud'}>
        <p>Weather goes here</p>
      </Box>
    );
  }
}