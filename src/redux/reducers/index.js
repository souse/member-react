import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import wx from './wx';

const rootReducer = combineReducers({
	wx,
	routing: routerReducer
});

export default rootReducer;