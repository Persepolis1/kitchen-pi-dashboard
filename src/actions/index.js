import { getDrivingTimes } from '../api/index';

export  function requestDrivingTimes(){
  return{
    type : 'DRIVING_TIMES',
    payload : getDrivingTimes(),
  }
}
