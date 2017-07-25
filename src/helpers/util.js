import {busData} from '../constants/cit';
import {dayToString,monthToString} from "../constants/date"


//Gets the weekday times for a location (ex: vaudreuil, coteVertu)
export function getBusWeekdayTimes(location){
  for (let i in busData){
    if (busData[i].location === location){
      return busData[i].weekdayTimes;
    }
  }
}

//Gets the weekend times of a location, 6 for saturday, 7 for sunday
export function getBusWeekendTimes(location, day){
  for (let i in  busData){
    if (busData[i].location === location){
      return busData[i].weekendTimes[day];
    }
  }
}

//Returns the date in a string format
export function getDayToString(day){
  return dayToString[day];
}

export function getMonthToString(month){
  return monthToString[month];
}