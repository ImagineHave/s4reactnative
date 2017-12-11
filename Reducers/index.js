import { combineReducers } from 'redux';
import prayerReducer from './prayer-reducer';

const rootReducer = combineReducers({
  users: prayerReducer
});

export default rootReducer;