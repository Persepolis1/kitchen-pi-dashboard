import axios from 'axios';

export function getDrivingTimes(){
  return axios.get(`/driving`);
}
