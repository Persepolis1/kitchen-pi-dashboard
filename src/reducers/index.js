import { combineReducers } from 'redux';
import driverReducer from '../reducers/drivingReducer'


const rootReducer = combineReducers({
  drivingTimes : driverReducer,
});

export default rootReducer;
