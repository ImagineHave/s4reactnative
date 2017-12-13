import { combineReducers } from 'redux';
import prayerReducer from './prayer-reducer';

const rootReducer = combineReducers({
  prayer: prayerReducer
});

export default rootReducer;