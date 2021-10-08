import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import records from './reducers/records';

export default createStore(combineReducers({ records }), composeWithDevTools());
