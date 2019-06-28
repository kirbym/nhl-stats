import { combineReducers } from 'redux';
import schedule from './schedule';
import teams from './teams';

export default combineReducers({
  schedule,
  teams
});
