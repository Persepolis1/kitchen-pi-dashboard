import React,{Component} from "react";
import "./Box.styl"

export default class Box extends Component{

  render(){
    return(
      <div className="box">
        <div className="box-header">
          <i className={`fa fa-${this.props.icon} fa-2x`}></i>
          <p>{this.props.title}</p>
        </div>
        <div className="box-body">
          {this.props.children}
        </div>
      </div>
    );
  };
}