import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Reducers } from './../reducers/index';

const composeEnhancers = composeWithDevTools({});

export default createStore(Reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));