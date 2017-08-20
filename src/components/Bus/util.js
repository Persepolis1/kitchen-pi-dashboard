import {busData} from '../../constants/cit';

function getAllBusTimes(location) {
  let date = new Date();
  let day = date.getDay();
  for (let i in busData) {
    if (busData[i].location === location) {
      let result = (day === 0 || 6 ? busData[i].weekendTimes[day] : busData[i].weekdayTimes);
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

export function getNextBuses(location) {
  let busTimes = getAllBusTimes(location);
  let busTimesParsed = convertStringTimeToNumber(busTimes);
  let results = [];
  let date = new Date();
  let time = `${date.getHours()}${padMinutes(date.getMinutes())}`;
  for (let i = 0; i < busTimesParsed.length; i++) {
    if (busTimesParsed[i] - time >= 0) {
      results.push(busTimes[i],busTimes[i + 1],busTimes[i + 2]);
      return results;
    }
  }
  return results;
}