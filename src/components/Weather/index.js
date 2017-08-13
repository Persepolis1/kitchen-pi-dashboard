import "./Weather.styl";
import React,{Component} from "react";
export default class Weather extends Component{
  constructor(props){
    super(props);
    this.state = {weather : {}};
  }

  componentDidMount(){
  }
  render(){
    return(
      <div>
        <h1>weather</h1>
      </div>
    );
  }
}