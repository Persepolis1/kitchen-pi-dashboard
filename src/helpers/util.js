import {dayToString, monthToString} from "../constants/date";


//Returns the date in a string format
export function getDayToString(day) {
  return dayToString[day];
}

export function getMonthToString(month) {
  return monthToString[month];
}