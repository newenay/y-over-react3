import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

//Reducer must have the name as its export, and possibly the same name as the data it lines up with
import slideBullets from './slideBullets';
import slideInfo from './slideInfo';
import slideControls from './slideControls';

// Combine all reducers together
const rootReducer = combineReducers({ slideInfo, slideBullets, slideControls, routing }); 

export default rootReducer;