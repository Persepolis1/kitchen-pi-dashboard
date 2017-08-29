import {busData} from '../../constants/cit';
import {trainData} from "../../constants/amt";

function getAllTransitTimes(location,type) {
  let date = new Date();
  let day = date.getDay();
  let transitData = type === "bus" ? busData : trainData;
  for (let i in transitData) {
    if (transitData[i].location === location) {
      let result = (day === (0 || 6) ? transitData[i].weekendTimes[day] : transitData[i].weekdayTimes);
      return result;
    }
  }
}

function convertStringTimeToNumber(timeArray){
  let copyArray = [...timeArray];
  for (let i = 0 ; i < copyArray.length ; i++){
    copyArray[i] = copyArray[i].replace(":","");
  }
  return copyArray;
}

function padMinutes(minute){
  return (minute < 10) ? ("0" + minute) : minute;
}

export function getNextTransit(location, type) {
  let transitTimes = getAllTransitTimes(location,type);
  let parsedTransitTimes = convertStringTimeToNumber(transitTimes);
  let results = [];
  let date = new Date();
  let time = `${date.getHours()}${padMinutes(date.getMinutes())}`;
  for (let i = 0; i < parsedTransitTimes.length; i++) {
    if (parsedTransitTimes[i] - time >= 0) {
      results.push(transitTimes[i],transitTimes[i + 1],transitTimes[i + 2]);
      return results;
    }
  }
  return results;
}