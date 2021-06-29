import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { colorToolReducer } from '../reducers/color-tool';

export const colorToolStore = createStore(colorToolReducer);