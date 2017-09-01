import React,{Component} from "react";
import "./Box.styl"

export default class Box extends Component{

  render(){
    return(
      <div className={`box box-${this.props.type}`}>
        <div className="box-blur"></div>
        <div className="box-header">
          <div className="box-bg"></div>
          <i className={`fa fa-${this.props.icon} fa-2x`}></i>
          <p>{this.props.title}</p>
        </div>
        <div className="box-body">
          <div className="box-bg"></div>
          {this.props.children}
        </div>
      </div>
    );
  };
}