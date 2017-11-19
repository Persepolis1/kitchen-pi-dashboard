
export default function (drivingTime = {}, action) {
  switch (action.type) {
    case 'DRIVING_TIMES':
      return action.payload;
    default:
      return drivingTime;
  }
}
