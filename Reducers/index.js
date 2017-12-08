import { combineReducers, createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import counterReducer from './CounterReducer';

const AppReducers = combineReducers({
    counterReducer,
})

const rootReducer = (state, action) => {
    return AppReducers(state, action);
}

let createStoreWithMiddleware = applyMiddleware()(createStore)

const store = createStoreWithMiddleware(rootReducer)
export default store;