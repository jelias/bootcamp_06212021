import { applyMiddleware, compose, createStore, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { carToolReducer } from '../reducers/car-tool';

export const carToolStore = createStore(
  carToolReducer,
  composeWithDevTools(applyMiddleware(thunk)),
  );