// Module Imports
import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

/**
 * @function Store
 * @description Holds the complete state tree of the app
*/
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store