// Module Imports
import { combineReducers } from "redux"
import listing from "./listingReducer"
import detail from "./detailReducer"

export default combineReducers({ listing, detail })