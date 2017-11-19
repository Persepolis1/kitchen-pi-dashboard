import React,{Component} from "react";
import Box from "../Box/index";
import { connect } from 'react-redux';
import { requestDrivingTimes } from '../../actions/index';

class DrivingTime extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.requestDrivingTimes();
  }

  render(){
    return (
      <Box title={"Driving Time Estimates"} icon={"car"} type={"driving-time"}>
        <p>hola</p>
      </Box>
    );
  }
}

function mapStateToProps(state) {
  return {
    drivingTimes: state.drivingTimes,
  };
}
export default connect(mapStateToProps, { requestDrivingTimes })(DrivingTime)
